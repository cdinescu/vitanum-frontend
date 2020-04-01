import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Food } from '../common/food';
import { Observable, empty, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AskOracleServiceService {
  private baseUrl = 'http://192.168.0.144:8082/top-richest-foods';

  private foodEndPoints = new Map<string, string>();

  constructor(private httpClient: HttpClient) {
    this.setUpFoodEndpoints();
  }

  setUpFoodEndpoints() {
    this.foodEndPoints.set('Caffeine', 'caffeine');
    this.foodEndPoints.set('Calcium', 'calcium');
    this.foodEndPoints.set('Carbohydrate', 'carbohydrate');
    this.foodEndPoints.set('Cholesterol', 'cholesterol');
    this.foodEndPoints.set('Choline', 'choline');
    this.foodEndPoints.set('Cryptoxanthin', 'cryptoxanthin');
    this.foodEndPoints.set('Epa', 'epa');
    this.foodEndPoints.set('Fluoride', 'fluoride');
    this.foodEndPoints.set('Folate', 'folate');
    this.foodEndPoints.set('Iron', 'iron');
    this.foodEndPoints.set('Leucine', 'leucine');
    this.foodEndPoints.set('Magnesium', 'magnesium');
    this.foodEndPoints.set('Niacin', 'niacin');
    this.foodEndPoints.set('Pantothenic Acid', 'pantothenic_acid');
    this.foodEndPoints.set('Phosphorus', 'phosphorus');
    this.foodEndPoints.set('Polyunsaturated Fat', 'polyunsat_fat');
    this.foodEndPoints.set('Potassium', 'potassium');
    this.foodEndPoints.set('Protein', 'protein');
    this.foodEndPoints.set('Riboflavin', 'riboflavin');
    this.foodEndPoints.set('Saturated Fat', 'saturated-fat');
    this.foodEndPoints.set('Selenium', 'selenium');
    this.foodEndPoints.set('Total Calories', 'total-kcal');
    this.foodEndPoints.set('Total Sugar', 'total-sugar');
    this.foodEndPoints.set('Vitamin B6', 'vitamin-b6');
    this.foodEndPoints.set('Vitamin B12', 'vitamin-b12');
    this.foodEndPoints.set('Vitamin C', 'vitamin-c');
    this.foodEndPoints.set('Vitamin D2', 'vitamin-d2');
    this.foodEndPoints.set('Vitamin Diu', 'vitamin-diu');
    this.foodEndPoints.set('Vitamin E', 'vitamin-e');
    this.foodEndPoints.set('Vitamin K', 'vitamin-k');
    this.foodEndPoints.set('Vitamin C', 'vitamin-c');
    this.foodEndPoints.set('Zinc', 'zinc');
  }

  getFoodNames(): string[] {
    return Array.from(this.foodEndPoints.keys());
  }

  sendRequest(foodName: string, foodCount: number): Observable<HttpResponse<Food[]>> {
    if (foodName == null || foodCount == null) {
      return empty();
    }

    const foodEndPoint = this.foodEndPoints.get(foodName);
    const requestUrl = `${this.baseUrl}/${foodEndPoint}?maxRecordCount=${foodCount}`;

    return this.httpClient.get<Food[]>(requestUrl, { observe: 'response' });
  }
}

