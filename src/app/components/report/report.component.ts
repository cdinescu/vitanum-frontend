import { Component, OnInit } from '@angular/core';
import { AskOracleServiceService } from 'src/app/services/ask-oracle-service.service';
import { NutrientEntity } from 'src/app/common/nutrient-entity';
import { ActivatedRoute } from '@angular/router';
import { CalendarService } from 'src/app/services/calendar.service';
import { FoodService } from 'src/app/services/food.service';
import { DiaryServiceService } from 'src/app/services/diary-service.service';
import { DiaryEntry } from 'src/app/common/diary-entry';
import { Food } from 'src/app/common/food';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  nutrientList: NutrientEntity[];

  // How to refactor this mess?
  constructor(private askOracleService: AskOracleServiceService,
    private calendarService: CalendarService,
    private diaryService: DiaryServiceService,
    private foodService: FoodService) { }

  ngOnInit(): void {
    this.nutrientList = this.askOracleService.getNutrientEntities();

    this.diaryService.getDiaryEntries(this.calendarService.currentlySelectedDate)
      .subscribe(data => {
        this.collectNutrientsFromSourceDiary(data);
      });
  }

  collectNutrientsFromSourceDiary(diaryEntries: DiaryEntry[]) {
    console.log(`Report for date: ${this.calendarService.currentlySelectedDate}`);

    diaryEntries.forEach(diaryEntry => {
      console.log(`Entry: ${diaryEntry.description}`);
      const food = this.getFoodFromEntry(diaryEntry);

      // Schimbare in back-end!
      console.log('>>> : ' + diaryEntry.fdcId);

      this.foodService.getNutrientReport(food).subscribe(data => {
        console.log(`Nutri for ${food.description}: ${data}`);
      });
    });
  }


  private getFoodFromEntry(diaryEntry: DiaryEntry) {
    const food = new Food();
    food.description = diaryEntry.description;
    food.measure = diaryEntry.unit;
    food.fdcId = diaryEntry.fdcId;
    return food;
  }
}
