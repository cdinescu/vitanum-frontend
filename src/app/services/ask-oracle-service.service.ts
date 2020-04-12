import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Food } from '../common/food';
import { NutrientEntity } from '../common/nutrient-entity';
import { NutrientHolder } from '../common/nutrient-holder';

@Injectable({
  providedIn: 'root'
})
export class AskOracleServiceService {
  private baseUrl = 'http://192.168.0.144:8082/top-richest-foods';

  nutrientHolder: NutrientHolder;
  private nutrientEntities: NutrientEntity[];

  constructor(private httpClient: HttpClient) {
    this.nutrientHolder = new NutrientHolder();
    this.nutrientEntities = this.nutrientHolder.loadNutrientEntiries();
  }

  getNutrientNames(): string[] {
    const nutrientNames = this.nutrientEntities.map(nutrienEntity => nutrienEntity.getDisplayName());
    return Array.from(nutrientNames);
  }

  sendRequest(nutrientName: string, resultCount: number): Observable<HttpResponse<Food[]>> {
    if (nutrientName == null || resultCount == null) {
      return EMPTY;
    }

    const foodEndPoint = this.getNutrientEndPointByName(nutrientName);
    const requestUrl = `${this.baseUrl}/${foodEndPoint}?maxRecordCount=${resultCount}`;

    return this.httpClient.get<Food[]>(requestUrl, { observe: 'response' });
  }

  private getNutrientEndPointByName(nutrientName: string): string {
    return this.nutrientEntities.find(entity => nutrientName === entity.getDisplayName()).getInternalName();
  }
}

