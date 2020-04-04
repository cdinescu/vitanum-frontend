import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodLoggerEntryComponent } from './food-logger-entry.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Food } from 'src/app/common/food';

describe('FoodLoggerEntryComponent', () => {
  let component: FoodLoggerEntryComponent;
  let fixture: ComponentFixture<FoodLoggerEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, MatIconModule, MaterialModule, MatDialogModule],
      declarations: [FoodLoggerEntryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodLoggerEntryComponent);
    component = fixture.componentInstance;

    let testFood = new Food();
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
});
