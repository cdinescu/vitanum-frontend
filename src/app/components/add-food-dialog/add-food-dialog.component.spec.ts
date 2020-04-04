import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodDialogComponent } from './add-food-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgForOf } from '@angular/common';
import { Food } from 'src/app/common/food';

describe('AddFoodDialogComponent', () => {
  let component: AddFoodDialogComponent;
  let fixture: ComponentFixture<AddFoodDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, MatIconModule, MaterialModule, MatDialogModule],
      declarations: [AddFoodDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component.loadFoodLogger = false;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values on fields', () => {
    expect(component.searchKeyword).toEqual('');
    expect(component.searchResult).toEqual([]);
    expect(component.selectedFoodBehaviour).toBeDefined();
  });

  it('should search result is reset before a new search', () => {
    // Arrange
    component.searchResult = [new Food()];

    // Act
    component.doSearch();

    // Assert
    expect(component.searchResult).toEqual([]);
  });

  it('should able to change selected food', () => {
    // Arrange
    let food = new Food();
    food.description = 'Random food';

    // Act
    component.setSelected(food);

    // Assert
    expect(component.selectedFood).toEqual(food);
    expect(component.loadFoodLogger).toEqual(true);
  });

  it('should able close the form', () => {
    // Arrange
    component.loadFoodLogger = true;

    // Act
    component.closeLogForm();

    // Assert
    expect(component.loadFoodLogger).toEqual(false);
  });
});
