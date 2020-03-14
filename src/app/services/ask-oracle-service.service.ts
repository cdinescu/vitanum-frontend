import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Food } from '../common/food';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AskOracleServiceService {
  private baseUrl = 'http://192.168.0.144:8082/top-richest-foods';

  constructor(private httpClient: HttpClient) {}

  getFoodNames(): string[] {
    return ['Potassium', 'Calcium', 'Magnesium'];
  }

  sendRequest(foodName: string, foodCount: number): Observable<HttpResponse<Food[]>> {
    const requestUrl = `${this.baseUrl}/${foodName}?maxRecordCount=${foodCount}`;

    return this.httpClient.get<Food[]>(requestUrl, { observe: 'response' });
  }
}

