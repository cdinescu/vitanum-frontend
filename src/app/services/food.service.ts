import { Injectable } from '@angular/core';
import { Food } from '../common/food';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Nutrient } from '../common/nutrient';

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

  getNutrientReport(food: Food): Observable<Nutrient[]> {
    const requestUrl = `${this.baseUrl}/reports?ndbNo=${food.ndbNumber}`;

    return this.httpClient.get<Nutrient[]>(requestUrl);
  }
}
