import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  selectedDate = new Subject<Date>();
  currentlySelectedDate: Date;

  constructor() {
    this.currentlySelectedDate = new Date();
  }

  notifyDateChanged(event: Date) {
    this.currentlySelectedDate = event;
    this.selectedDate.next(event);
  }
}
