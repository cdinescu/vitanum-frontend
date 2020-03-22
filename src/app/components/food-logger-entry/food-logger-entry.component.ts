import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/common/food';
import { FoodService } from 'src/app/services/food.service';
import { DiaryServiceService } from 'src/app/services/diary-service.service';
import { DiaryEntry } from 'src/app/common/diary-entry';

@Component({
  selector: 'app-food-logger-entry',
  templateUrl: './food-logger-entry.component.html',
  styleUrls: ['./food-logger-entry.component.css']
})
export class FoodLoggerEntryComponent implements OnInit {
  @Input()
  foodAboutToBeLogged: Food;

  servingsCount = 1; // default

  availableFoodMesurements: string[] = ['g', 'mg', 'l', 'ml'];
  selectedMesurement: string;

  constructor(private foodService: FoodService, private diaryServiceService: DiaryServiceService) { }

  ngOnInit(): void {
    this.selectedMesurement = this.availableFoodMesurements[0];
    console.log('Input: ' + this.foodAboutToBeLogged);
  }

  addEntryToDiary() {
    console.log(':) addEntryToDiary');
    const entry = new DiaryEntry();
    entry.description = this.foodAboutToBeLogged.description;
    entry.amount = 100;
    entry.calories = 100;

    this.diaryServiceService.addEntry(entry);
  }

}
