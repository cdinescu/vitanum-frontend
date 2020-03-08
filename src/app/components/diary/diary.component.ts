import { Component, OnInit } from '@angular/core';
import { DiaryServiceService } from '../../services/diary-service.service';
import { DiaryEntry } from 'src/app/common/diary-entry';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { AddFoodDialogComponent } from '../add-food-dialog/add-food-dialog.component';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diaryEntries: DiaryEntry[];

  constructor(private diaryService: DiaryServiceService, private dialog: MatDialog) { 
  }

  ngOnInit(): void {
    this.listDiaryEntries();
  }

  listDiaryEntries() {
   this.diaryEntries = this.diaryService.getDiaryEntries();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
        title: 'Add Food to Diary'
    };

    const dialogRef = this.dialog.open(AddFoodDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      // alert("response: " + result)
    });
  }
  

}
