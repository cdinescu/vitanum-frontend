import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryComponent } from './diary.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DiaryEntry } from 'src/app/common/diary-entry';
import { DiaryServiceService } from 'src/app/services/diary-service.service';
import { of } from 'rxjs';
import { CalendarService } from 'src/app/services/calendar.service';

describe('DiaryComponent', () => {
  let component: DiaryComponent;
  let fixture: ComponentFixture<DiaryComponent>;
  const dialogMock = {
    open: () => { },
    close: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatIconModule, MaterialModule, MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: [] }
      ],
      declarations: [DiaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to load service data on init', () => {
    // Arrange
    const diaryService: DiaryServiceService = TestBed.inject(DiaryServiceService);
    const calendarService: CalendarService = TestBed.inject(CalendarService);

    const diaryEntry = new DiaryEntry();
    const diaryEntries: DiaryEntry[] = [diaryEntry];
    calendarService.selectedDate.next(new Date());
    spyOn(diaryService, 'getDiaryEntries').and.returnValue(of(diaryEntries));

    // Act
    fixture.detectChanges();
    component.ngOnInit();

    // Assert
    expect(component.diaryEntries).toContain(diaryEntry);
  });

  it('should have a non null dialog reference: TODO', () => {
    // Arrange
    // const dialogSpy = spyOn(dialogMock, 'open');
    // fixture.detectChanges();

    // Act
    component.openDialog();

    // Assert
    // dialogMock.close();
    // expect(dialogSpy).toHaveBeenCalled();
  });
});
