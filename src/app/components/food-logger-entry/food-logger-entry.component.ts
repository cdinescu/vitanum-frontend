import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/common/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-logger-entry',
  templateUrl: './food-logger-entry.component.html',
  styleUrls: ['./food-logger-entry.component.css']
})
export class FoodLoggerEntryComponent implements OnInit {
  @Input()
  foodAboutToBeLogged: Food;

  servingsCount: number;

  availableFoodMesurements: String[] = ['g', 'mg', 'l', 'ml'];
  selectedMesurement: String;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.selectedMesurement = this.availableFoodMesurements[0];
    console.log('Input: ' + this.foodAboutToBeLogged);
  }

}
