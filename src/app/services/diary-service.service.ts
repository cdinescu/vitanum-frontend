import { Injectable } from '@angular/core';
import { DiaryEntry } from '../common/diary-entry';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DateUtils } from '../common/date-utils';
import { UrlConstants } from '../common/constants/url-constants';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class DiaryServiceService {
  private baseUrl = UrlConstants.DIARY_SERVICE_BASE_URL;
  private searchUrl = UrlConstants.DIARY_SERVICE_SEARCH_URL;

  private updateDiaryEntryModelQuery = new BehaviorSubject(true);
  updateDiaryEntryQuery = this.updateDiaryEntryModelQuery.asObservable();
  currentlyLoggedInUsername: string;

  constructor(private httpClient: HttpClient, public oktaAuth: OktaAuthService) {
    this.oktaAuth.getUser().then(claims => this.currentlyLoggedInUsername = claims.preferred_username);
  }

  getDiaryEntries(diaryTargetDate: Date): Observable<DiaryEntry[]> {
    const formattedDate = DateUtils.formatDateInISOFormat(diaryTargetDate);
    const thisUrl = `${this.searchUrl}/findByUsernameAndDate?date=${formattedDate}&username=${this.currentlyLoggedInUsername}`;

    return this.httpClient.get<GetResponseDiaryEntries>(thisUrl).pipe(map(response => response._embedded.diaryEntries));
  }

  postDiaryEntry(diaryEntry: DiaryEntry): Observable<DiaryEntry> {
    diaryEntry.username = this.currentlyLoggedInUsername;
    return this.httpClient.post<DiaryEntry>(this.baseUrl, diaryEntry);
  }

  updateDiaryEntry(diaryEntry: DiaryEntry): Observable<any> {
    const updateUrl = `${this.baseUrl}/${diaryEntry.id}`;

    return this.httpClient.put<any>(updateUrl, diaryEntry);
  }

  deleteDiaryEntry(diaryEntryId: number): Observable<void> {
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
