import { Component, OnInit } from '@angular/core';
import { DiaryServiceService } from '../../services/diary-service.service';
import { DiaryEntry } from 'src/app/common/diary-entry';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddFoodDialogComponent } from '../add-food-dialog/add-food-dialog.component';
import { Diary } from 'src/app/common/diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  selectedDiary: Diary;
  diaryTargetDate: Date;

  diaryEntries: DiaryEntry[];

  constructor(private diaryService: DiaryServiceService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.selectedDiary = new Diary();
    this.listDiaryEntries();
  }

  fetchDiary() {
    console.log('Fetch dirty with date: ' + this.diaryTargetDate);
    const targetDiary = this.diaryService.getDiary(this.diaryTargetDate + '');
    console.log('..... Fetched: ' + targetDiary);

    if (targetDiary != null) {
      this.selectedDiary = targetDiary;
      console.log(' Its ok ' + this.selectedDiary.date + ' --- ' + this.selectedDiary.entries.length);
      this.diaryEntries = this.selectedDiary.entries;
    }
  }

  listDiaryEntries() {
    this.diaryEntries = this.selectedDiary.entries;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.height = '50%';
    dialogConfig.width = '50%';
    dialogConfig.panelClass = 'add-food-dialog';

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Add Food to Diary'
    };

    const dialogRef = this.dialog.open(AddFoodDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  updateEntry(entryId: number) {
    console.log('Update: ' + entryId);
  }

  deleteEntry(entryId: number) {
    console.log('Delete: ' + entryId);
  }
}
