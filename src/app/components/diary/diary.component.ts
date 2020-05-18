import { Component, OnInit, NgZone } from '@angular/core';
import { DiaryServiceService } from '../../services/diary-service.service';
import { DiaryEntry } from 'src/app/common/diary-entry';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddFoodDialogComponent } from '../add-food-dialog/add-food-dialog.component';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diaryTargetDate: Date;

  diaryEntries: DiaryEntry[] = [];

  constructor(private diaryService: DiaryServiceService,
    private calendarService: CalendarService,
    private dialog: MatDialog,
    private ngZone: NgZone) { }

  ngOnInit(): void {
    this.diaryTargetDate = new Date();

    // change the diary entries if the selected date gas changed
    this.calendarService.selectedDate.subscribe(data => {
      this.diaryTargetDate = data;
      this.listDiaryEntries();
    });

    // is this still necessary?
    this.diaryService.updateDiaryEntryQuery.subscribe(data => this.listDiaryEntries());

    // the user has successfully authenticated; the diaries can now be fetched
    this.diaryService.oktaAuth.getUser().then((claim) => {
      this.listDiaryEntries();
    });
  }

  listDiaryEntries() {
    this.diaryService.getDiaryEntries(this.diaryTargetDate).subscribe(data => this.diaryEntries = data);
  }

  updateEntry(entry: DiaryEntry) {
    this.diaryService.updateDiaryEntry(entry).subscribe(data => this.listDiaryEntries());
  }

  deleteEntry(entryId: number) {
    this.diaryService.deleteDiaryEntry(entryId).subscribe(data => this.listDiaryEntries());
  }

  changeValue(entry: DiaryEntry, property: string, event: any) {
    entry[property] = event.target.textContent;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.height = '50%';
    dialogConfig.width = '60%';
    dialogConfig.panelClass = 'add-food-dialog';

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Add Food to Diary'
    };

    this.ngZone.run(() => {
      this.dialog.open(AddFoodDialogComponent, dialogConfig);
    });
  }

}
