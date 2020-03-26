import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Food } from 'src/app/common/food';
import { FoodService } from 'src/app/services/food.service';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private foodService: FoodService) {
    this.modalTitle = data.title;
  }

  ngOnInit(): void {
    this.searchKeyword = '';
    this.searchResult = [];
  }

  doSearch() {
    this.searchResult = [];

    this.foodService.getSearchResult(this.searchKeyword).subscribe(response => {
      for (const foodResponse of response) {
        const food = new Food();
        food.description = foodResponse.name;
        food.ndbno = foodResponse.ndbno;

        this.searchResult.push(food);
      }

    });
  }

  setSelected(food: Food) {
    console.log('Selected: ' + food.description);

    this.selectedFood = food;
    this.loadFoodLogger = true;
  }

  closeLogForm() {
    this.loadFoodLogger = false;
  }
}
