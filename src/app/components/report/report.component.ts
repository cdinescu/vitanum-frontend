import { Component, OnInit } from '@angular/core';
import { AskOracleServiceService } from 'src/app/services/ask-oracle-service.service';
import { NutrientEntity } from 'src/app/common/nutrient-entity';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  nutrientList: NutrientEntity[];

  constructor(private askOracleService: AskOracleServiceService) { }

  ngOnInit(): void {
    this.nutrientList = this.askOracleService.getNutrientEntities();
  }

}
