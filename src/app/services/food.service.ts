import { Injectable } from '@angular/core';
import { Food } from '../common/food';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FoodResponse } from '../common/food-response';
import { Nutrient } from '../common/nutrient';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private baseUrl = 'http://192.168.0.144:8082/foods';

  constructor(private httpClient: HttpClient) { }

  getSearchResult(searchKeyword: string): Observable<FoodResponse[]> {
    const requestUrl = `${this.baseUrl}/search?foodSearchKeyword=${searchKeyword}`;

    return this.httpClient.get<FoodResponse[]>(requestUrl);
  }

  getNutrientReport(food: Food): Observable<Nutrient[]> {
    const requestUrl = `${this.baseUrl}/reports?ndbNo=${food.ndbno}`;

    return this.httpClient.get<Nutrient[]>(requestUrl);
  }
}
