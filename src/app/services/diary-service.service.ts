import { Injectable } from '@angular/core';
import { DiaryEntry } from '../common/diary-entry';
import { Diary } from '../common/diary';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DiaryServiceService {
  pipe = new DatePipe('en-US');
  testMap = new Map<string, Diary>();

  constructor() {
    let diary = new Diary();
    diary.date = this.pipe.transform(new Date('2020-03-15'), 'yyyy-MM-dd');

    let diaryEntry = new DiaryEntry();
    diaryEntry.description = 'Tomato';
    diaryEntry.amount = 90;
    diaryEntry.calories = 40;
    diaryEntry.unit = 'g';
    diaryEntry.id = 1;

    diary.entries = [diaryEntry];

    this.testMap.set(diary.date, diary);

    diary = new Diary();
    diary.date = this.pipe.transform(new Date('2020-03-30'), 'yyyy-MM-dd');

    diaryEntry = new DiaryEntry();
    diaryEntry.id = 2;
    diaryEntry.description = 'Cheese';
    diaryEntry.amount = 190;
    diaryEntry.calories = 140;
    diaryEntry.unit = 'g';

    diary.entries = [diaryEntry];

    this.testMap.set(diary.date, diary);
  }

  getDiaryEntries(): DiaryEntry[] {
    const diaryEntry = new DiaryEntry();
    diaryEntry.id = 3;
    diaryEntry.description = 'Tomato';
    diaryEntry.amount = 90;
    diaryEntry.calories = 40;
    diaryEntry.unit = 'g';

    return [diaryEntry];
  }

  getDiary(targetDiaryDate: string) {
    console.log(this.testMap);
    return this.testMap.get(targetDiaryDate);
  }

  addEntry(entry: DiaryEntry) {
    console.log('Adding entry: ' + entry);
  }
}
