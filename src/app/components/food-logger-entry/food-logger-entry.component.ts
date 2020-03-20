import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/common/food';

@Component({
  selector: 'app-food-logger-entry',
  templateUrl: './food-logger-entry.component.html',
  styleUrls: ['./food-logger-entry.component.css']
})
export class FoodLoggerEntryComponent implements OnInit {
  @Input()
  foodAboutToBeLogged: Food;

  servingsCount: number;

  constructor() { }

  ngOnInit(): void {
    console.log('Input: ' + this.foodAboutToBeLogged);
  }

}
