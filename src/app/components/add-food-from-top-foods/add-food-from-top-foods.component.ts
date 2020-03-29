import { Component, OnInit, Inject } from '@angular/core';
import { Food } from 'src/app/common/food';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-food-from-top-foods',
  templateUrl: './add-food-from-top-foods.component.html',
  styleUrls: ['./add-food-from-top-foods.component.css']
})
export class AddFoodFromTopFoodsComponent implements OnInit {
  modalTitle: string;

  foodSelectedFromTop: Food;
  diaryTargetDate: Date;

  selectedFoodBehaviour: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
  }

  ngOnInit(): void {
    this.selectedFoodBehaviour = new BehaviorSubject(this.foodSelectedFromTop);
  }

  notifyDateChanged(event: Date) {
    console.log('Date changed event: ' + event);
    this.diaryTargetDate = event;
  }

}
