import { Injectable } from '@angular/core';
import {DiaryEntry} from '../common/diary-entry';

@Injectable({
  providedIn: 'root'
})
export class DiaryServiceService {
    constructor() { }

  getDiaryEntries(): DiaryEntry[] {
    const diaryEntry = new DiaryEntry();
    diaryEntry.description = 'Tomato';
    diaryEntry.amount = 90;
    diaryEntry.calories = 40;
    diaryEntry.unit = 'g';

    return [diaryEntry];
  }
}
