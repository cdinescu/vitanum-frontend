import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryComponent } from './diary.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DiaryEntry } from 'src/app/common/diary-entry';

describe('DiaryComponent', () => {
  let component: DiaryComponent;
  let fixture: ComponentFixture<DiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatIconModule, MaterialModule, MatDialogModule],
      declarations: [ DiaryComponent ]
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

  it('should be able to list entries', () => {
    // Act
    component.listDiaryEntries();

    expect(component.diaryEntries).toEqual([]);
  });

  it('should be able to update entries', () => {
    // Act
    let diaryEntry = new DiaryEntry();
    component.updateEntry(diaryEntry);

    expect(component.diaryEntries).toEqual([]);
  });

  it('should be able to delete entries', () => {
    // Act
    let diaryEntry = new DiaryEntry();
    component.deleteEntry(1);

    expect(component.diaryEntries).toEqual([]);
  });
});
