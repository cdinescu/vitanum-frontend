import { TestBed } from '@angular/core/testing';

import { CalendarService } from './calendar.service';

describe('CalendarService', () => {
  let service: CalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a default selected date', () => {
    expect(service.currentlySelectedDate).toBeDefined();
  });

  it('should have a define subject', () => {
    expect(service.selectedDate).toBeDefined();
  });

  it('should modify selected date', () => {
    const newDate = new Date();
    service.notifyDateChanged(newDate);

    expect(service.currentlySelectedDate).toEqual(newDate);
  });
});
