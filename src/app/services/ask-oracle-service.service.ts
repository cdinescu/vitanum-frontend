import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Food } from '../common/food';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AskOracleServiceService {
  private baseUrl = 'http://192.168.0.144:8082/top-richest-foods/iron';

  constructor(private httpClient: HttpClient) { }

  getFoodNames(): string[] {
    return ['Potassium', 'Calcium', 'Magnesium'];
  }

  testConnection(): Observable<HttpResponse<Food[]>> {
    console.log('AskOracleServiceService >>> ');
    this.httpClient.get<GetResponseFood>(this.baseUrl).subscribe(data => {
      // console.log(data);
    });

    this.httpClient.get(this.baseUrl, { observe: 'response' }).subscribe(data => {
      console.log('response: ' + data);
    });

    // return this.httpClient.get<Food[]>(this.baseUrl);
    return this.httpClient.get<Food[]>(
      this.baseUrl, { observe: 'response' });
  }
}

interface GetResponseFood {
    // __proto__ : {
    foods: Food[];
    // }
}
