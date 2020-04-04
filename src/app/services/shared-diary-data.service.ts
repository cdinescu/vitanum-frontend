import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDiaryDataService {
  private dateQuery = new BehaviorSubject(new Date());
  sharedDateQuery = this.dateQuery.asObservable();

  constructor() { }

  nextDateQuery(query: Date) {
    this.dateQuery.next(query);
  }
}
