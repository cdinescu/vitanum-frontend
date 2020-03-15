import { DiaryEntry } from './diary-entry';

export class Diary {
    id: number;

    date: string;

    entries: DiaryEntry[] = [];
}
