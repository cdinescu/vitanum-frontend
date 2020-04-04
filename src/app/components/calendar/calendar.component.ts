import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  diaryTargetDate: Date;

  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.diaryTargetDate = new Date();
    this.calendarService.selectedDate.subscribe(data => this.diaryTargetDate = data);
  }

  notifyDateChanged(event: Date) {
    this.calendarService.notifyDateChanged(event);
  }

}
