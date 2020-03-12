import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AskOracleServiceService {

  constructor() { }

  getFoodNames(): string[] {
    let foodNames = ["Potassium", "Calcium", "Magnesium"];

    return foodNames;
  }
}
