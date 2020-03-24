import { Component, OnInit } from '@angular/core';
import { DiaryServiceService } from '../../services/diary-service.service';
import { DiaryEntry } from 'src/app/common/diary-entry';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddFoodDialogComponent } from '../add-food-dialog/add-food-dialog.component';
import { Diary } from 'src/app/common/diary';
import { Food } from 'src/app/common/food';

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

  listDiaryEntries() {
    this.diaryService.getDiaryEntries().subscribe(data => {
      this.diaryEntries = data;
      console.log('Received: ' + data);

      for(let d of this.diaryEntries) {
        console.log('Received: ' + d.description);
      }
    });
  }

  addFoodEntry(food: Food) {
    console.log('Add: ' + food);
  }

  updateEntry(entryId: number) {
    console.log('Update: ' + entryId);
  }

  deleteEntry(entryId: number) {
    console.log('Delete: ' + entryId);
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
