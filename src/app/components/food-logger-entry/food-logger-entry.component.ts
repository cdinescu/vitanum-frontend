import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/common/food';
import { DiaryServiceService } from 'src/app/services/diary-service.service';
import { DiaryEntry } from 'src/app/common/diary-entry';
import { DateUtils } from 'src/app/common/date-utils';
import { Observable } from 'rxjs';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-food-logger-entry',
  templateUrl: './food-logger-entry.component.html',
  styleUrls: ['./food-logger-entry.component.css']
})
export class FoodLoggerEntryComponent implements OnInit {
  UPDATE_DIARY_ENTRY_MODEL = true;

  @Input()
  foodAboutToBeLogged: Observable<Food>;
  selectedFood;

  logEntryDate: Date;

  servingsCount = 1; // default

  availableFoodMesurements = ['g', 'mg'];
  selectedMesurement: string;

  constructor(private calendarService: CalendarService, private diaryService: DiaryServiceService) {}

  ngOnInit(): void {
    this.selectedMesurement = this.availableFoodMesurements[0];

    this.foodAboutToBeLogged.subscribe(data => {
      this.resetFoodSelection();
      this.selectedFood = data;
    });
  }

  addEntryToDiary() {
    const diaryEntry = new DiaryEntry();

    this.logEntryDate = this.calendarService.currentlySelectedDate;
    diaryEntry.description = this.selectedFood.description;
    diaryEntry.date = DateUtils.formatDateInISOFormat(this.logEntryDate);
    diaryEntry.amount = this.servingsCount;
    diaryEntry.unit = this.selectedMesurement;
    diaryEntry.fdcId = this.selectedFood.fdcId;

    this.diaryService.postDiaryEntry(diaryEntry).subscribe(data => {
      // notify diary component to send a new GET request
      this.diaryService.nextUpdateDiaryEntryModelQuery(this.UPDATE_DIARY_ENTRY_MODEL);
    });
  }

  resetFoodSelection() {
    this.selectedFood = null;
    this.servingsCount = 1; // default
  }

}
