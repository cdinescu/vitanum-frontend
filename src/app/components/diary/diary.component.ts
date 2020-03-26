import { Component, OnInit } from '@angular/core';
import { DiaryServiceService } from '../../services/diary-service.service';
import { DiaryEntry } from 'src/app/common/diary-entry';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddFoodDialogComponent } from '../add-food-dialog/add-food-dialog.component';
import { Diary } from 'src/app/common/diary';
import { SharedDiaryDataService } from 'src/app/services/shared-diary-data.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  selectedDiary: Diary;
  diaryTargetDate: Date;

  diaryEntries: DiaryEntry[];

  constructor(private diaryService: DiaryServiceService, private sharedSelectedDiaryDateService: SharedDiaryDataService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.diaryTargetDate = new Date();
    this.selectedDiary = new Diary();
    this.listDiaryEntries();

    this.sharedSelectedDiaryDateService.updateDiaryEntryQuery.subscribe(data => {
      this.listDiaryEntries();
    });

    console.log('Selected date: ' + this.diaryTargetDate);
  }

  listDiaryEntries() {
    this.sharedSelectedDiaryDateService.nextDateQuery(this.diaryTargetDate);

    this.diaryService.getDiaryEntries(this.diaryTargetDate).subscribe(data => {
      this.diaryEntries = data;
    });
  }

  updateEntry(entryId: number) {
    console.log('Update: ' + entryId);
  }

  deleteEntry(entryId: number) {
    console.log('Delete: ' + entryId);
    this.diaryService.deleteDiaryEntry(entryId).subscribe(data => {
      // refresh the diary entries
      this.listDiaryEntries();
    });
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

    const dialogRef = this.dialog.open(AddFoodDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
