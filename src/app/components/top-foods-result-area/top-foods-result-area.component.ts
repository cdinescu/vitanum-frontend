import { Component, OnInit, Input } from '@angular/core';
import { AskOracleServiceService } from 'src/app/services/ask-oracle-service.service';
import { Food } from 'src/app/common/food';
import { AskOracleSharedDataService } from 'src/app/services/ask-oracle-shared-data.service';
import { AskOracleQuery } from 'src/app/common/ask-oracle-query';

@Component({
  selector: 'app-top-foods-result-area',
  templateUrl: './top-foods-result-area.component.html',
  styleUrls: ['./top-foods-result-area.component.css']
})
export class TopFoodsResultAreaComponent implements OnInit {
  askOracleQuery: AskOracleQuery;

  topFoods: Food[] = [];

  constructor(private askOracleServiceService: AskOracleServiceService, private askOracleSharedDataService: AskOracleSharedDataService) {}

  ngOnInit(): void {
    this.askOracleSharedDataService.sharedQuery.subscribe(query => {
      this.askOracleQuery = query;
      console.log(' ======================= ' + this.askOracleQuery.nutrientName + ' ' + this.askOracleQuery.maxResult);
      this.sendRequest(this.askOracleQuery);
    });
  }

  sendRequest(askOracleQuery: AskOracleQuery) {
    this.askOracleServiceService.sendRequest('iron', askOracleQuery.maxResult).subscribe(response => {
      this.topFoods = [];
      for (const data of response.body) {
        this.topFoods.push(data);
      }
    });
  }

}
