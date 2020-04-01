import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  selectedDate = new Subject<Date>();

  constructor() { }

  notifyDateChanged(event: Date) {
    console.log(`Heeeeey: ${event}`);
    this.selectedDate.next(event);
  }
}
