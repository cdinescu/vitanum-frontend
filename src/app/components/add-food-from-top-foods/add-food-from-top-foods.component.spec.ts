import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodFromTopFoodsComponent } from './add-food-from-top-foods.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('AddFoodFromTopFoodsComponent', () => {
  let component: AddFoodFromTopFoodsComponent;
  let fixture: ComponentFixture<AddFoodFromTopFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MatIconModule, MaterialModule, MatDialogModule],
      declarations: [AddFoodFromTopFoodsComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoodFromTopFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values on fields', () => {
    expect(component.diaryTargetDate).toBeDefined();
    expect(component.selectedFoodBehaviour).toBeDefined();
  });

  it('should change date on change event', () => {
    // Arrange
    const newDate = new Date();

    // Act
    component.notifyDateChanged(newDate);

    // Assert
    expect(component.diaryTargetDate).toEqual(newDate);
  });
});
