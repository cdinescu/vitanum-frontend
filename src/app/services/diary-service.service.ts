import { Injectable } from '@angular/core';
import { DiaryEntry } from '../common/diary-entry';
import { Diary } from '../common/diary';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Food } from '../common/food';
import { DateUtils } from '../common/date-utils';

@Injectable({
  providedIn: 'root'
})
export class DiaryServiceService {
  private baseUrl = 'http://192.168.0.144:8082/api/diaryEntries';
  private searchUrl = 'http://192.168.0.144:8082/api/diaryEntries/search';

  private updateDiaryEntryModelQuery = new BehaviorSubject(true);
  updateDiaryEntryQuery = this.updateDiaryEntryModelQuery.asObservable();

  constructor(private httpClient: HttpClient) { }

  getDiaryEntries(diaryTargetDate: Date): Observable<DiaryEntry[]> {
    const formattedDate = DateUtils.formatDateInISOFormat(diaryTargetDate);
    const thisUrl = `${this.searchUrl}/findByDate?date=${formattedDate}`;

    return this.httpClient.get<GetResponseDiaryEntries>(thisUrl).pipe(map(response => response._embedded.diaryEntries));
  }

  postDiaryEntry(diaryEntry: DiaryEntry): Observable<DiaryEntry> {
    console.log('POST: ' + diaryEntry);
    return this.httpClient.post<DiaryEntry>(this.baseUrl, diaryEntry);
  }

  updateDiaryEntry(diaryEntry: DiaryEntry): Observable<any> {
    console.log('UPDATE diary entry with id: ' + diaryEntry.id);
    const updateUrl = `${this.baseUrl}/${diaryEntry.id}`;

    return this.httpClient.put<any>(updateUrl, diaryEntry);
  }

  deleteDiaryEntry(diaryEntryId: number): Observable<void> {
    console.log('DELETE diary entry with id: ' + diaryEntryId);
    const deleteUrl = `${this.baseUrl}/${diaryEntryId}`;

    return this.httpClient.delete<void>(deleteUrl);
  }

  nextUpdateDiaryEntryModelQuery(query: boolean) {
    this.updateDiaryEntryModelQuery.next(query);
  }
}

interface GetResponseDiaryEntries {
  _embedded: {
    diaryEntries: DiaryEntry[];
  };
}
