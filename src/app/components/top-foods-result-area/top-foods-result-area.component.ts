import { Component, OnInit } from '@angular/core';
import { AskOracleServiceService } from 'src/app/services/ask-oracle-service.service';
import { HttpClient } from '@angular/common/http';
import { Food } from 'src/app/common/food';

@Component({
  selector: 'app-top-foods-result-area',
  templateUrl: './top-foods-result-area.component.html',
  styleUrls: ['./top-foods-result-area.component.css']
})
export class TopFoodsResultAreaComponent implements OnInit {
  topFoods: Food[] = [];

  constructor(private askOracleServiceService: AskOracleServiceService) { }

  ngOnInit(): void {
    this.sendRequest();
  }

  sendRequest() {
    this.askOracleServiceService.testConnection().subscribe(response => {
      for (const data of response.body) {
        console.log('data--- ' + data.description + ' ' + data.measure + ' ' + data.quantity);
        this.topFoods.push(data);
      }
    });
  }

}
