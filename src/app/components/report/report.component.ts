import { Component, OnInit } from '@angular/core';
import { AskOracleServiceService } from 'src/app/services/ask-oracle-service.service';
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
  username = "cristina"; // this will be removed after integrating OAuth2

  // How to refactor this mess?
  constructor(private askOracleService: AskOracleServiceService,
    private calendarService: CalendarService,
    private diaryService: DiaryServiceService,
    private foodService: FoodService) { }

  ngOnInit(): void {
    this.diaryService
      .getDiaryEntries(this.calendarService.currentlySelectedDate, this.username)
      .subscribe((data) => this.collectNutrientsFromSourceDiary(data));
  }

  private collectNutrientsFromSourceDiary(diaryEntries: DiaryEntry[]) {
    console.log(`Report for date: ${this.calendarService.currentlySelectedDate}`);

    const observableList: Observable<FoodNutrient[]>[] = [];
    diaryEntries.forEach(diaryEntry => {
      const food = this.getFoodFromEntry(diaryEntry);
      observableList.push(this.foodService.getNutrientReport(food));
    });

    this.forkObservableAndJoinResults(observableList);
  }

  private forkObservableAndJoinResults(observableList: Observable<FoodNutrient[]>[]) {
    forkJoin(observableList).subscribe(foodNutrients => {
      foodNutrients.forEach(nutrientList => nutrientList.forEach(element => this.increaseAmountFor(element))
      );
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
