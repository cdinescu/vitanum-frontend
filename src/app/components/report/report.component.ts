import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { FoodService } from 'src/app/services/food.service';
import { DiaryServiceService } from 'src/app/services/diary-service.service';
import { DiaryEntry } from 'src/app/common/diary-entry';
import { Food } from 'src/app/common/food';
import { FoodNutrient } from 'src/app/common/food-nutrient';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  nutrientList: FoodNutrient[] = [];

  constructor(private calendarService: CalendarService, private diaryService: DiaryServiceService, private foodService: FoodService) { }

  ngOnInit(): void {
    this.diaryService
      .getDiaryEntries(this.calendarService.currentlySelectedDate)
      .subscribe((data) => this.collectNutrientsFromSourceDiary(data));
  }

  private collectNutrientsFromSourceDiary(diaryEntries: DiaryEntry[]) {
    const observableList: Observable<FoodNutrient[]>[] = [];
    let totalAmountOfFood = 0.0;

    diaryEntries.forEach(diaryEntry => {
      const food = this.getFoodFromEntry(diaryEntry);
      observableList.push(this.foodService.getNutrientReport(food));

      totalAmountOfFood = this.computeTotalAmountInGrams(diaryEntry, totalAmountOfFood);
    });

    this.forkObservableAndJoinResults(observableList, totalAmountOfFood);
  }

  private computeTotalAmountInGrams(diaryEntry: DiaryEntry, totalAmountOfFood: number) {
    if (diaryEntry.unit === 'g') {
      totalAmountOfFood += diaryEntry.amount;
    } else { // 'mg'
      totalAmountOfFood += diaryEntry.amount / 1000;
    }
    return totalAmountOfFood;
  }

  private forkObservableAndJoinResults(observableList: Observable<FoodNutrient[]>[], totalAmountOfFood: number) {
    forkJoin(observableList).subscribe(foodNutrients => {
      foodNutrients.forEach(nutrientList => nutrientList.forEach(element => this.increaseAmountFor(element)));
      // amount of nutrient per 100g of food
      foodNutrients.forEach(nutrientList => nutrientList.forEach(element => element.amount *= totalAmountOfFood / 100));

      // sort the nutrient by name (ascendently)
      this.nutrientList.sort((a, b) => a.nutrient.name.localeCompare(b.nutrient.name));
    });
  }

  private increaseAmountFor(nutrient: FoodNutrient) {
    const foundNutrient = this.nutrientList.find(element => element.nutrient.name === nutrient.nutrient.name);

    if (foundNutrient == null) {
      this.nutrientList.push(nutrient);
    } else {
      foundNutrient.amount += nutrient.amount;
    }
  }

  private getFoodFromEntry(diaryEntry: DiaryEntry) {
    const food = new Food();
    food.description = diaryEntry.description;
    food.measure = diaryEntry.unit;
    food.fdcId = diaryEntry.fdcId;

    return food;
  }
}
