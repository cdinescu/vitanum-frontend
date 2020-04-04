import { Component, OnInit, Input } from '@angular/core';
import { AskOracleServiceService } from 'src/app/services/ask-oracle-service.service';
import { Food } from 'src/app/common/food';
import { AskOracleSharedDataService } from 'src/app/services/ask-oracle-shared-data.service';
import { AskOracleQuery } from 'src/app/common/ask-oracle-query';
import { MatDialogConfig, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddFoodFromTopFoodsComponent } from '../add-food-from-top-foods/add-food-from-top-foods.component';

@Component({
  selector: 'app-top-foods-result-area',
  templateUrl: './top-foods-result-area.component.html',
  styleUrls: ['./top-foods-result-area.component.css']
})
export class TopFoodsResultAreaComponent implements OnInit {
  askOracleQuery: AskOracleQuery;

  topFoods: Food[] = [];

  constructor(private askOracleServiceService: AskOracleServiceService, private askOracleSharedDataService: AskOracleSharedDataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.askOracleSharedDataService.sharedQuery.subscribe(query => {
      this.askOracleQuery = query;
      this.sendRequest(this.askOracleQuery);
    });
  }

  private sendRequest(askOracleQuery: AskOracleQuery) {
    this.askOracleServiceService.sendRequest(askOracleQuery.nutrientName, askOracleQuery.maxResult).subscribe(response => {
      this.topFoods = [];
      for (const data of response.body) {
        this.topFoods.push(data);
      }
    });
  }

  addFoodToDiary(food: Food): MatDialogRef<AddFoodFromTopFoodsComponent, any> {
    return this.openDialog(food);
  }

  private openDialog(food: Food): MatDialogRef<AddFoodFromTopFoodsComponent, any> {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.height = '40%';
    dialogConfig.width = '60%';
    dialogConfig.panelClass = 'add-food-dialog';

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Add Food to Diary'
    };

    const dialogRef = this.dialog.open(AddFoodFromTopFoodsComponent, dialogConfig);
    dialogRef.componentInstance.foodSelectedFromTop = food;

    return dialogRef;
  }

}
