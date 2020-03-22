import { Component, OnInit } from '@angular/core';
import { AskOracleServiceService } from 'src/app/services/ask-oracle-service.service';
import { AskOracleSharedDataService } from 'src/app/services/ask-oracle-shared-data.service';
import { AskOracleQuery } from 'src/app/common/ask-oracle-query';


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

  constructor(private askOracleServiceService: AskOracleServiceService, private askOracleSharedDataService: AskOracleSharedDataService) { }

  ngOnInit(): void {
    this.populateFoodNames();

    if (this.foodNames != null && this.foodNames.length > 0) {
      this.selectedFoodName = this.foodNames[0];
    }
  }

  populateFoodNames() {
    this.foodNames = this.askOracleServiceService.getFoodNames();
  }

  onSubmitClick() {
    const askOracleQuery = new AskOracleQuery();
    askOracleQuery.nutrientName = this.selectedFoodName;
    askOracleQuery.maxResult = this.selectedFoodCount;

    this.askOracleSharedDataService.nextQuery(askOracleQuery);
  }

}
