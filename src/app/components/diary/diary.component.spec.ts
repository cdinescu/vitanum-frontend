import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryComponent } from './diary.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DiaryEntry } from 'src/app/common/diary-entry';
import { DiaryServiceService } from 'src/app/services/diary-service.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { OktaConstants } from 'src/app/testing/okta-constants';

describe('DiaryComponent', () => {
  let component: DiaryComponent;
  let fixture: ComponentFixture<DiaryComponent>;
  const dialogMock = {
    close: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatIconModule, MaterialModule, MatDialogModule, OktaAuthModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: OKTA_CONFIG, useValue: OktaConstants.OKTA_CONFIG }
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


  it('should be able to list entries', () => {
    // Arrange
    const diaryService: DiaryServiceService = TestBed.inject(DiaryServiceService);
    const diaryEntry = new DiaryEntry();
    const diaryEntries: DiaryEntry[] = [diaryEntry];
    spyOn(diaryService, 'getDiaryEntries').and.returnValue(of(diaryEntries));

    // Act
    component.listDiaryEntries();

    // Assert
    expect(component.diaryEntries).toContain(diaryEntry);
  });

  it('should be able to update entries', () => {
    // Arrange
    const diaryService: DiaryServiceService = TestBed.inject(DiaryServiceService);
    const diaryEntry = new DiaryEntry();
    const diaryEntries: DiaryEntry[] = [diaryEntry];
    spyOn(diaryService, 'getDiaryEntries').and.returnValue(of(diaryEntries));
    spyOn(diaryService, 'updateDiaryEntry').and.returnValue(of(diaryEntry));

    // Act
    component.updateEntry(diaryEntry);

    expect(component.diaryEntries).toContain(diaryEntry);
  });

  xit('should be able to delete entries', () => {
    // Arrange
    const diaryService: DiaryServiceService = TestBed.inject(DiaryServiceService);
    const diaryEntry = new DiaryEntry();
    const diaryEntries: DiaryEntry[] = [diaryEntry];
    spyOn(diaryService, 'getDiaryEntries').and.returnValue(of(diaryEntries));
    spyOn(diaryService, 'deleteDiaryEntry').and.returnValue(of());
    fixture.detectChanges();

    // Act
    component.deleteEntry(1);

    expect(component.diaryEntries).toContain(diaryEntry);
  });

  it('should call update on update button click', () => {
    // Arrange
    const diaryEntry = new DiaryEntry();
    component.diaryEntries = [diaryEntry];
    fixture.detectChanges();

    const warningButton = fixture.debugElement.query(By.css('.btn.btn-warning'));
    const diaryService: DiaryServiceService = TestBed.inject(DiaryServiceService);
    const spy = spyOn(diaryService, 'updateDiaryEntry');

    // Act
    warningButton.triggerEventHandler('click', diaryEntry);

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
  });


  it('should call delete on delete button click', () => {
    // Arrange
    const diaryEntry = new DiaryEntry();
    component.diaryEntries = [diaryEntry];
    fixture.detectChanges();

    const warningButton = fixture.debugElement.query(By.css('.btn.btn-danger'));
    const diaryService: DiaryServiceService = TestBed.inject(DiaryServiceService);
    const spy = spyOn(diaryService, 'deleteDiaryEntry');

    // Act
    warningButton.triggerEventHandler('click', diaryEntry);

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should open the add food dialog on button click', () => {
    // Arrange
    fixture.detectChanges();

    const dialogButton = fixture.debugElement.queryAll(By.css('.btn-light'))[0];
    const spy = spyOn(component, 'openDialog');

    // Act
    dialogButton.triggerEventHandler('click', null);

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
