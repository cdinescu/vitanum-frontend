import { Injectable } from '@angular/core';
import { Food } from '../common/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getSearchResult(searchKeyword: string): Food[] {
    const food1 = new Food();
    food1.description = 'Tomato';
    food1.measure = 'g';
    food1.quantity = 10;

    const food2 = new Food();
    food2.description = 'Cheese';
    food2.measure = 'g';
    food2.quantity = 10;

    return [food1, food2];
  }
}
