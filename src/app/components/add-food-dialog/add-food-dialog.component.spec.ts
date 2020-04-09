import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodDialogComponent } from './add-food-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Food } from 'src/app/common/food';
import { FoodService } from 'src/app/services/food.service';
import { of } from 'rxjs';

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

  it('should search result is reset before a new search', () => {
    // Arrange
    component.searchResult = [new Food()];
    const foodService = TestBed.inject(FoodService);
    const food = new Food();
    food.description = 'Peach';

    spyOn(foodService, 'getSearchResult').and.callFake(() => {
      return of([food]);
    });

    // Act
    component.doSearch();

    // Assert
    expect(component.searchResult).toEqual([food]);
  });
});
