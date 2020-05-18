import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodLoggerEntryComponent } from './food-logger-entry.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Food } from 'src/app/common/food';
import { OKTA_CONFIG, OktaAuthModule, UserClaims, OktaAuthService } from '@okta/okta-angular';
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

    const testFood = new Food();
    testFood.description = 'test food';
    testFood.measure = 'g';
    testFood.quantity = 100;

    component.selectedFood = testFood;

    component.foodAboutToBeLogged = new Observable<Food>();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have available measurements', () => {
    expect(component.availableFoodMesurements).toEqual(['g', 'mg']);
  });

  it('should have a selected measure', () => {
    expect(component.selectedMesurement).toEqual('g');
  });

  it('should reset entry', () => {
    // Arrange
    component.servingsCount = 125;

    // Act
    component.resetFoodSelection();

    // Assert
    expect(component.selectedFood).toEqual(null);
    expect(component.servingsCount).toEqual(1);
  });

});
