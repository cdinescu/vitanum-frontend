import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';
import { CalendarService } from 'src/app/services/calendar.service';
import { Subject } from 'rxjs';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the selected date from the calendar service', () => {
    // Arrange
    const date = new Date();
    const calendarService: CalendarService = TestBed.get(CalendarService);
    calendarService.selectedDate.next(date);

    // Act: forces a DOM update
    fixture.detectChanges();
    component.ngOnInit();

    // Assert
    expect(component.diaryTargetDate).toBeTruthy();
  });

  it('should notify the calendar service if the date changes', () => {
    // Arrange
    const date = new Date();
    const calendarService = TestBed.get(CalendarService);
    const spy = spyOn(calendarService, 'notifyDateChanged');

    // Act
    component.notifyDateChanged(date);

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
