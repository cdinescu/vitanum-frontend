import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Food } from 'src/app/common/food';
import { FoodService } from 'src/app/services/food.service';
import { FoodResponse } from 'src/app/common/food-response';
import { doesNotReject } from 'assert';

@Component({
  selector: 'app-add-food-dialog',
  templateUrl: './add-food-dialog.component.html',
  styleUrls: ['./add-food-dialog.component.css']
})
export class AddFoodDialogComponent implements OnInit {
  modalTitle: string;

  searchKeyword: string;

  searchResult: Food[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private foodService: FoodService) {
    this.modalTitle = data.title;
  }

  ngOnInit(): void {
    this.searchKeyword = '';
    this.searchResult = [];
  }

  doSearch() {
    console.log('Do search: ' + this.searchKeyword);
    this.searchResult = [];

    this.foodService.getSearchResult(this.searchKeyword).subscribe(response => {
      // for (const data of response.body) {
      // let receivedFood = data;
      // console.log('        Food service: ' + response);
      //console.log(' {} ' + response.);
      for (let foodResponse of response) {
        //console.log(food);
        //let foodResponse: FoodResponse;
        //foodResponse = food;
        let food = new Food();
        food.description = foodResponse.name;
        food.ndbno = foodResponse.ndbno;
        //food.description = foodResponse.
        this.searchResult.push(food);
      }

    });
  }

}
