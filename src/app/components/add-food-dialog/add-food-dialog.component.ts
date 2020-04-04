import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Food } from 'src/app/common/food';
import { FoodService } from 'src/app/services/food.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-food-dialog',
  templateUrl: './add-food-dialog.component.html',
  styleUrls: ['./add-food-dialog.component.css']
})
export class AddFoodDialogComponent implements OnInit {
  modalTitle: string;

  searchKeyword: string;
  searchResult: Food[];

  loadFoodLogger = false;
  selectedFood: Food;
  selectedFoodBehaviour: any;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private foodService: FoodService) {
    this.modalTitle = data.title;
  }

  ngOnInit(): void {
    this.searchKeyword = '';
    this.searchResult = [];
    this.selectedFoodBehaviour = new BehaviorSubject(this.selectedFood);
  }

  doSearch() {
    this.searchResult = [];
    this.foodService.getSearchResult(this.searchKeyword).subscribe(data => this.searchResult = data);
  }

  setSelected(food: Food) {
    this.selectedFood = food;
    this.loadFoodLogger = true;

    this.selectedFoodBehaviour.next(this.selectedFood);
  }

  closeLogForm() {
    this.loadFoodLogger = false;
  }
}
