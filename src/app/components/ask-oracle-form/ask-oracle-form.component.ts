import { Component, OnInit } from '@angular/core';
import { AskOracleServiceService } from 'src/app/services/ask-oracle-service.service';


@Component({
  selector: 'app-ask-oracle-form',
  templateUrl: './ask-oracle-form.component.html',
  styleUrls: ['./ask-oracle-form.component.css']
})

export class AskOracleFormComponent implements OnInit {
  topFoodCountOptions = [25, 50, 75, 100, 200];
  selectedFoodCount = 25; // default value

  foodNames: string[]; // take from service
  selectedFoodName: string;

  constructor(private askOracleServiceService: AskOracleServiceService) { }

  ngOnInit(): void {
    this.populateFoodNames();

    if(this.foodNames != null && this.foodNames.length > 0) {
      this.selectedFoodName = this.foodNames[0];
    }
  }

  populateFoodNames() {
    this.foodNames = this.askOracleServiceService.getFoodNames();
  }

}
