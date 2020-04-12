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

  // How to refactor this mess?
  constructor(private askOracleService: AskOracleServiceService,
    private calendarService: CalendarService,
    private diaryService: DiaryServiceService,
    private foodService: FoodService) { }

  ngOnInit(): void {
    this.diaryService.getDiaryEntries(this.calendarService.currentlySelectedDate)
      .subscribe(data => {
        this.collectNutrientsFromSourceDiary(data);
      });
  }

  collectNutrientsFromSourceDiary(diaryEntries: DiaryEntry[]) {
    console.log(`Report for date: ${this.calendarService.currentlySelectedDate}`);

    const observableList: Observable<FoodNutrient[]>[] = [];
    diaryEntries.forEach(diaryEntry => {
      const food = this.getFoodFromEntry(diaryEntry);

      // Schimbare in back-end!
      console.log('>>> : ' + diaryEntry.fdcId);
      observableList.push(this.foodService.getNutrientReport(food));
    });

    forkJoin(observableList).subscribe(results => {
      results.forEach(nutrientList => {
        nutrientList.forEach(element => {
          console.log(element.nutrient);

          this.increaseAmountFor(element);
        });

      });
    });
  }

  increaseAmountFor(nutrient: FoodNutrient) {
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
