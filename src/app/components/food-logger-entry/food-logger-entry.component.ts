import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/common/food';
import { FoodService } from 'src/app/services/food.service';
import { DiaryServiceService } from 'src/app/services/diary-service.service';
import { DiaryEntry } from 'src/app/common/diary-entry';
import { SharedDiaryDataService } from 'src/app/services/shared-diary-data.service';
import { DateUtils } from 'src/app/common/date-utils';

@Component({
  selector: 'app-food-logger-entry',
  templateUrl: './food-logger-entry.component.html',
  styleUrls: ['./food-logger-entry.component.css']
})
export class FoodLoggerEntryComponent implements OnInit {
  UPDATE_DIARY_ENTRY_MODEL = true;

  @Input()
  foodAboutToBeLogged: Food;

  @Input()
  logEntryDate: Date;

  servingsCount = 1; // default

  availableFoodMesurements: string[] = ['g', 'mg', 'l', 'ml'];
  selectedMesurement: string;

  constructor(private foodService: FoodService, private sharedSelectedDiaryDateService: SharedDiaryDataService, private diaryService: DiaryServiceService) { }

  ngOnInit(): void {
    this.selectedMesurement = this.availableFoodMesurements[0];
    console.log('Input: ' + this.foodAboutToBeLogged.description);

    this.sharedSelectedDiaryDateService.sharedDateQuery.subscribe(query => {
      this.logEntryDate = query;
      console.log('     Entry date: ' + this.logEntryDate);
    });
  }

  addEntryToDiary() {
    console.log('................ADD ' + this.logEntryDate);
    const diaryEntry = new DiaryEntry();

    diaryEntry.description = this.foodAboutToBeLogged.description;
    diaryEntry.date = DateUtils.formatDateInISOFormat(this.logEntryDate);
    diaryEntry.amount = this.servingsCount;
    diaryEntry.unit = this.selectedMesurement;
    diaryEntry.calories = 250; // do something about this!

    this.diaryService.postDiaryEntry(diaryEntry).subscribe(data => {
      console.log('Got: ' + data.description);
      // notify diary component to send a new GET request
      this.sharedSelectedDiaryDateService.nextUpdateDiaryEntryModelQuery(this.UPDATE_DIARY_ENTRY_MODEL);
    });
  }

}
