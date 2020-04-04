import { TestBed } from '@angular/core/testing';

import { FoodService } from './food.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../common/food';

describe('FoodService', () => {
  let service: FoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(FoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to search food', () => {
    expect(service.getSearchResult('Tomato')).toBeInstanceOf(Observable);
  });

  it('should be able to get nutrient report', () => {
    let food = new Food();
    food.fdcId = '9';

    expect(service.getNutrientReport(food)).toBeInstanceOf(Observable);
  });

  it('should be able to get nutrient report when food id is null', () => {
    let food = new Food();
    food.fdcId = null;

    expect(service.getNutrientReport(food)).toBeInstanceOf(Observable);
  });
});
