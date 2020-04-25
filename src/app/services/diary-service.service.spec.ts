import { TestBed } from '@angular/core/testing';

import { DiaryServiceService } from './diary-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiaryEntry } from '../common/diary-entry';

describe('DiaryServiceService', () => {
  let service: DiaryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(DiaryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to get diary entries', () => {
    expect(service.getDiaryEntries(new Date(), 'cristina')).toBeInstanceOf(Observable);
  });

  it('should be able to create a new diary entry', () => {
    expect(service.postDiaryEntry(new DiaryEntry())).toBeInstanceOf(Observable);
  });

  it('should be able to update a diary entry', () => {
    expect(service.updateDiaryEntry(new DiaryEntry())).toBeInstanceOf(Observable);
  });

  it('should be able to delete a diary entry', () => {
    expect(service.deleteDiaryEntry(1)).toBeInstanceOf(Observable);
  });
});
