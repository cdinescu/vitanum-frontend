import { Injectable } from '@angular/core';
import { Food } from '../common/food';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FoodNutrient } from '../common/food-nutrient';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private baseUrl = 'http://localhost:9090/foods';

  constructor(private httpClient: HttpClient) { }

  getSearchResult(searchKeyword: string): Observable<Food[]> {
    const requestUrl = `${this.baseUrl}/search?foodSearchKeyword=${searchKeyword}`;

    return this.httpClient.get<Food[]>(requestUrl);
  }

  getNutrientReport(food: Food): Observable<FoodNutrient[]> {
    let foodId = food.fdcId;
    const requestUrl = `${this.baseUrl}/reports/${foodId}`;
    console.log('Id: ' + food.fdcId);

    return this.httpClient.get<FoodNutrient[]>(requestUrl);
  }

  searchFoodAndGetNdbNumber(food: Food): string {
    let result: string;
    this.getSearchResult(food.description).subscribe(data => {
      result = data[0].fdcId;
    });

    return result;
  }
}
