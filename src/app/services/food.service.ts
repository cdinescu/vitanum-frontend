import { Injectable } from '@angular/core';
import { Food } from '../common/food';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FoodNutrient } from '../common/food-nutrient';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private baseUrl = 'http://192.168.0.144:8082/foods';

  constructor(private httpClient: HttpClient) { }

  getSearchResult(searchKeyword: string): Observable<Food[]> {
    const requestUrl = `${this.baseUrl}/search?foodSearchKeyword=${searchKeyword}`;

    return this.httpClient.get<Food[]>(requestUrl);
  }

  getNutrientReport(food: Food): Observable<FoodNutrient[]> {
    let foodId = food.fdcId;

    if (foodId == null) {
      return this.searchFoodAndGetNdbNumber(food);
    }

    const requestUrl = `${this.baseUrl}/reports/${foodId}`;
    console.log('Id: ' + food.fdcId + ' -----> ' + requestUrl);

    return this.httpClient.get<FoodNutrient[]>(requestUrl);
  }

  searchFoodAndGetNdbNumber(food: Food): Observable<FoodNutrient[]> {
    let result: Observable<FoodNutrient[]>;
    this.getSearchResult(food.description).subscribe(data => {
      console.log('Finallt got: ' + data[0].description);
      result = this.getNutrientReport(data[0]);
    });

    return result;
  }
}
