import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponent } from './report.component';
import { HttpClientModule } from '@angular/common/http';
import { DiaryServiceService } from 'src/app/services/diary-service.service';
import { CalendarService } from 'src/app/services/calendar.service';
import { FoodService } from 'src/app/services/food.service';
import { empty, of } from 'rxjs';
import { DiaryEntry } from 'src/app/common/diary-entry';
import { FoodNutrient } from 'src/app/common/food-nutrient';
import { Nutrient } from 'src/app/common/nutrient';
import { OKTA_CONFIG, OktaAuthModule, OktaAuthService, UserClaims } from '@okta/okta-angular';
import { OktaConstants } from 'src/app/testing/okta-constants';
import { MyUserClaim } from 'src/app/testing/my-user-claim';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  let oktaAuthService: OktaAuthService;
  let userClaimsPromise: Promise<UserClaims>;

  let calendarService: CalendarService;
  let diarySevice: DiaryServiceService;
  let foodService: FoodService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, OktaAuthModule],
      declarations: [ReportComponent],
      providers: [{ provide: OKTA_CONFIG, useValue: OktaConstants.OKTA_CONFIG }]
    }).compileComponents();

    oktaAuthService = TestBed.inject(OktaAuthService);
    const myClaim = new MyUserClaim();
    myClaim.preferred_username = 'cristina';

    userClaimsPromise = new Promise<UserClaims>(uc => myClaim);
    spyOn(oktaAuthService, 'getUser').and.returnValue(userClaimsPromise);

    calendarService = TestBed.inject(CalendarService);
    diarySevice = TestBed.inject(DiaryServiceService);
    foodService = TestBed.inject(FoodService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty nutrient report if diary non-existent or empty', () => {
    // Arrange
    const date = new Date();
    calendarService.currentlySelectedDate = date;

    spyOn(diarySevice, 'getDiaryEntries').and.callFake((date) => {
      return empty();
    });

    // Act
    fixture.detectChanges();

    // Assert
    expect(component.nutrientList).toEqual([]);
  });

  it('should have an empty nutrient report if diary entries have foods with no nutrients', () => {
    // Arrange
    const diaryEntry1 = new DiaryEntry();
    diaryEntry1.description = 'Tomato';
    diaryEntry1.amount = 100;
    diaryEntry1.calories = 50;
    diaryEntry1.unit = 'g';
    diaryEntry1.fdcId = '1000';
    diaryEntry1.username = 'cristina';

    const diaryEntry2 = new DiaryEntry();
    diaryEntry2.description = 'Cheese';
    diaryEntry2.amount = 50;
    diaryEntry2.calories = 100;
    diaryEntry1.unit = 'g';
    diaryEntry2.fdcId = '1001';

    const date = new Date();
    calendarService.currentlySelectedDate = date;

    spyOn(diarySevice, 'getDiaryEntries').and.callFake(date => {
      return of([diaryEntry1, diaryEntry2]);
    });

    spyOn(foodService, 'getNutrientReport').and.callFake(anyValue => {
      return empty();
    });

    // Act
    fixture.detectChanges();

    // Assert
    expect(component.nutrientList).toEqual([]);
  });

  it('should have a complete nutrient report if diary entries have foods with nutrients', () => {
    // Arrange
    const diaryEntry1 = new DiaryEntry();
    diaryEntry1.description = 'Tomato';
    diaryEntry1.amount = 200;
    diaryEntry1.calories = 50;
    diaryEntry1.unit = 'g';
    diaryEntry1.fdcId = '1000';

    const diaryEntry2 = new DiaryEntry();
    diaryEntry2.description = 'Cheese';
    diaryEntry2.amount = 50;
    diaryEntry2.calories = 200;
    diaryEntry1.unit = 'g';
    diaryEntry2.fdcId = '1001';

    const foodNutrient1 = new FoodNutrient();
    foodNutrient1.amount = 1;
    const nutrient1 = new Nutrient();
    nutrient1.name = 'Iron';
    nutrient1.unitName = 'mg';
    foodNutrient1.nutrient = nutrient1;

    const foodNutrient2 = new FoodNutrient();
    foodNutrient2.amount = 5;
    const nutrient2 = new Nutrient();
    nutrient2.name = 'Vitamin C';
    nutrient2.unitName = 'mg';
    foodNutrient2.nutrient = nutrient2;

    const date = new Date();
    calendarService.currentlySelectedDate = date;

    spyOn(diarySevice, 'getDiaryEntries').and.callFake(date => {
      return of([diaryEntry1, diaryEntry2]);
    });

    spyOn(foodService, 'getNutrientReport').and.callFake(any => {
      return of([foodNutrient1, foodNutrient2]);
    });

    // Act
    fixture.detectChanges();

    // Assert
    expect(component.nutrientList).toContain(foodNutrient1);
    const nutrientReport1 = component.nutrientList.find(element => element === foodNutrient1);
    expect(nutrientReport1.amount).toEqual(8.004000500000002); // has been added twice

    expect(component.nutrientList).toContain(foodNutrient2);
    const nutrientReport2 = component.nutrientList.find(element => element === foodNutrient2);
    expect(nutrientReport2.amount).toEqual(40.02000250000001); // has been added twice
  });
});
