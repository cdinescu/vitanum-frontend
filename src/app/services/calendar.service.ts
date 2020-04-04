import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SharedDiaryDataService } from './shared-diary-data.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  selectedDate = new Subject<Date>();

  constructor(private sharedSelectedDiaryDateService: SharedDiaryDataService) { }

  notifyDateChanged(event: Date) {
    console.log(`Heeeeey: ${event}`);

    this.sharedSelectedDiaryDateService.nextDateQuery(event);
    this.selectedDate.next(event);
  }
}
