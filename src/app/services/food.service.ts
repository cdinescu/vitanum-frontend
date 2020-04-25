import { Injectable } from '@angular/core';
import { Food } from '../common/food';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FoodNutrient } from '../common/food-nutrient';
import { UrlConstants } from '../common/constants/url-constants';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private baseUrl = UrlConstants.FOOD_SERVICE_BASE_URL;

  constructor(private httpClient: HttpClient) { }

  getSearchResult(searchKeyword: string): Observable<Food[]> {
    const requestUrl = `${this.baseUrl}/search?foodSearchKeyword=${searchKeyword}`;

    return this.httpClient.get<Food[]>(requestUrl);
  }

  getNutrientReport(food: Food): Observable<FoodNutrient[]> {
    const requestUrl = `${this.baseUrl}/reports/${food.fdcId}`;
    return this.httpClient.get<FoodNutrient[]>(requestUrl);
  }

}
