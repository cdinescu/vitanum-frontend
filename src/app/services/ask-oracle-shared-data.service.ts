import { Injectable } from '@angular/core';
import { AskOracleQuery } from '../common/ask-oracle-query';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AskOracleSharedDataService {
   private query = new BehaviorSubject(new AskOracleQuery());
   sharedQuery = this.query.asObservable();

  constructor() { }

  nextQuery(query: AskOracleQuery) {
    console.log('next >>>> ' + query);
    this.query.next(query);
  }
}
