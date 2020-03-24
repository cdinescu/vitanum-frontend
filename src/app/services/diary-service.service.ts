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

  constructor(private httpClient: HttpClient) { }

  getDiaryEntries(diaryTargetDate: Date): Observable<DiaryEntry[]> {
    let thisUrl = '';
    if (diaryTargetDate != null) {
      const formattedDate = diaryTargetDate.getFullYear() + '-' + ("0" + (diaryTargetDate.getMonth() + 1)).slice(-2) + '-' + ("0" + diaryTargetDate.getDate()).slice(-2);
      console.log('Target date: ' + diaryTargetDate.getFullYear() + '-' + ("0" + (diaryTargetDate.getMonth() + 1)).slice(-2) + '-' + ("0" + diaryTargetDate.getDate()).slice(-2));
      thisUrl = 'http://192.168.0.144:8082/api/diaryEntries/search/findByDate?date=' + formattedDate;
    } else {

    thisUrl = 'http://192.168.0.144:8082/api/diaryEntries/search/findByDate?date=2020-03-24';//this.baseUrl;
  }
    //if (diaryTargetDate != null) {
    //const dateISO = '2020-03-22';//diaryTargetDate.toISOString().substring(0, 10);
    //console.log('Fetching diaries logged at date: ' + dateISO);

    //thisUrl = 'http://192.168.0.144:8082/api/diaryEntries/search/findByDate?date=2020-03-24';//`${this.baseUrl}/search/findByDate&date=${dateISO}`;
    //}
    return this.httpClient.get<GetResponseDiaryEntries>(thisUrl).pipe(map(response => response._embedded.diaryEntries));
  }

  addEntry(entry: DiaryEntry) {
    console.log('Adding entry: ' + entry);
  }
}

interface GetResponseDiaryEntries {
  _embedded: {
    diaryEntries: DiaryEntry[];
  }
}
