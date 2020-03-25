import { Injectable } from '@angular/core';
import { DiaryEntry } from '../common/diary-entry';
import { Diary } from '../common/diary';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiaryServiceService {

  private baseUrl = 'http://192.168.0.144:8082/api/diaryEntries';

  private searchUrl = 'http://192.168.0.144:8082/api/diaryEntries/search';

  constructor(private httpClient: HttpClient) { }

  getDiaryEntries(diaryTargetDate: Date): Observable<DiaryEntry[]> {
    const formattedDate = this.formatDateInISOFormat(diaryTargetDate);
    let thisUrl = `${this.searchUrl}/findByDate?date=${formattedDate}`;

    return this.httpClient.get<GetResponseDiaryEntries>(thisUrl).pipe(map(response => response._embedded.diaryEntries));
  }

  private formatDateInISOFormat(diaryTargetDate: Date) {
    return diaryTargetDate.getFullYear() + '-' +
      ('0' + (diaryTargetDate.getMonth() + 1)).slice(-2) +
      '-' + ('0' + diaryTargetDate.getDate()).slice(-2);
  }

  addEntry(entry: DiaryEntry) {
    console.log('Adding entry: ' + entry);
  }
}

interface GetResponseDiaryEntries {
  _embedded: {
    diaryEntries: DiaryEntry[];
  };
}
