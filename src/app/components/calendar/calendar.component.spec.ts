import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';
import { CalendarService } from 'src/app/services/calendar.service';
import { Subject } from 'rxjs';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;
  let calendarService = new CalendarService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = new CalendarComponent(calendarService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default selected date', () => {
    // Arrange
    let date = new Date();
    calendarService.selectedDate.next(date);

    // Act
    component.ngOnInit();

    // Assert
    expect(component.diaryTargetDate).toEqual(date);
  });
});
