import { Component, OnInit } from '@angular/core';
import {DiaryServiceService} from '../../services/diary-service.service';
import { DiaryEntry } from 'src/app/common/diary-entry';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diaryEntries: DiaryEntry[];

  constructor(private diaryService: DiaryServiceService) { 
  }

  ngOnInit(): void {
    this.listDiaryEntries();
  }

  listDiaryEntries() {
   this.diaryEntries = this.diaryService.getDiaryEntries();
  }

}
