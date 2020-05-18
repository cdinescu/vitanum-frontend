import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodLoggerEntryComponent } from './food-logger-entry.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Food } from 'src/app/common/food';
import { DiaryServiceService } from 'src/app/services/diary-service.service';
import { DiaryEntry } from 'src/app/common/diary-entry';
import { OKTA_CONFIG, OktaAuthModule, OktaAuthService, UserClaims } from '@okta/okta-angular';
import { OktaConstants } from 'src/app/testing/okta-constants';
import { MyUserClaim } from 'src/app/testing/my-user-claim';

describe('FoodLoggerEntryComponent', () => {
  let component: FoodLoggerEntryComponent;
  let fixture: ComponentFixture<FoodLoggerEntryComponent>;

  let oktaAuthService: OktaAuthService;
  let userClaimsPromise: Promise<UserClaims>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, MatIconModule, MaterialModule, MatDialogModule, OktaAuthModule],
      declarations: [FoodLoggerEntryComponent],
      providers: [{ provide: OKTA_CONFIG, useValue: OktaConstants.OKTA_CONFIG }]
    })
      .compileComponents();

      oktaAuthService = TestBed.inject(OktaAuthService);
      const myClaim = new MyUserClaim();
      myClaim.preferred_username = 'cristina';
  
      userClaimsPromise = new Promise<UserClaims>(uc => myClaim);
      spyOn(oktaAuthService, 'getUser').and.returnValue(userClaimsPromise);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodLoggerEntryComponent);
    component = fixture.componentInstance;
  });

  it('should initialize selected food in component init', () => {
    // Arrange
    const testFood = createFood();
    component.foodAboutToBeLogged = of(testFood);

    // Act
    fixture.detectChanges();

    // Assert
    expect(component.servingsCount).toBe(1);
    expect(component.selectedFood).toEqual(testFood);
  });

  it('should trigger an update model in the service', () => {
    // Arrange
    const testFood = createFood();
    component.foodAboutToBeLogged = of(testFood);
    fixture.detectChanges();

    const diaryService: DiaryServiceService = TestBed.inject(DiaryServiceService);
    spyOn(diaryService, 'postDiaryEntry').and.returnValue(of(createDiaryEntry()));
    const spy = spyOn(diaryService, 'nextUpdateDiaryEntryModelQuery');

    // Act
    component.addEntryToDiary();

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
  });

});

function createFood() {
  const testFood = new Food();
  testFood.description = 'test food';
  testFood.measure = 'g';
  testFood.quantity = 100;
  return testFood;
}

function createDiaryEntry() {
  const diaryEntry = new DiaryEntry();
  diaryEntry.description = 'new diary entry';
  diaryEntry.amount = 100;
  diaryEntry.calories = 150;
  diaryEntry.unit = 'g';
  diaryEntry.username = 'cristina'; // OAuth2

  return diaryEntry;
}

