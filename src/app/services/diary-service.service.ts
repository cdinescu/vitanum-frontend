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

  private baseUrl = 'http://192.168.0.144:8082/api/diaryEntries/';

  constructor(private httpClient: HttpClient) { }

  getDiaryEntries(): Observable<DiaryEntry[]> {
    //const foodEndPoint = this.foodEndPoints.get(foodName);
    //const requestUrl = `${this.baseUrl}/${foodEndPoint}?maxRecordCount=${foodCount}`;
    this.httpClient.get<GetResponseDiaryEntries>(this.baseUrl).pipe(map(response => response._embedded.diaryEntries)).subscribe(data => {
      console.log('HEY: ' + data);
    });

    return this.httpClient.get<GetResponseDiaryEntries>(this.baseUrl).pipe(map(response => response._embedded.diaryEntries));
  }

  addEntry(entry: DiaryEntry) {
    console.log('Adding entry: ' + entry);
  }
}

interface GetResponseDiaryEntries {
  _embedded : {
    diaryEntries: DiaryEntry[]
  }
}
