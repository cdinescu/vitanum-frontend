import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFoodsResultAreaComponent } from './top-foods-result-area.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { Food } from 'src/app/common/food';

describe('TopFoodsResultAreaComponent', () => {
  let component: TopFoodsResultAreaComponent;
  let fixture: ComponentFixture<TopFoodsResultAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatIconModule, MaterialModule, MatDialogModule],
      declarations: [TopFoodsResultAreaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFoodsResultAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open add food dialog', () => {
    // Arrange
    const food = new Food();
    food.description = 'New food description';

    // Act
    const dialogRef = component.addFoodToDiary(food);

    // Assert
    expect(dialogRef).toBeDefined();
    expect(dialogRef.componentInstance.foodSelectedFromTop).toEqual(food);

    // Close the dialog
    dialogRef.close();
  });
});
