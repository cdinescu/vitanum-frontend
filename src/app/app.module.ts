import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryComponent } from './components/diary/diary.component';
import { TabbedMenuComponent } from './components/tabbed-menu/tabbed-menu.component';
import { AskOracleFormComponent } from './components/ask-oracle-form/ask-oracle-form.component';
import { TopFoodsResultAreaComponent } from './components/top-foods-result-area/top-foods-result-area.component';
import { DiaryServiceService } from '../app/services/diary-service.service';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddFoodDialogComponent } from './components/add-food-dialog/add-food-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AskOracleSharedDataService } from '../app/services/ask-oracle-shared-data.service';
import { FoodService } from './services/food.service';
import { FoodLoggerEntryComponent } from './components/food-logger-entry/food-logger-entry.component';
import { AddFoodFromTopFoodsComponent } from './components/add-food-from-top-foods/add-food-from-top-foods.component';
import { ReportComponent } from './components/report/report.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AuthRoutingModule } from './auth-routing.module';
import { OktaAuthGuard } from '@okta/okta-angular';
import { AddTokenInterceptor } from './http_interceptor/add-token-interceptor';


const routes: Routes = [
  { path: 'diaries/:id', component: DiaryComponent, canActivate: [OktaAuthGuard] },
  { path: 'ask-the-oracle', component: TopFoodsResultAreaComponent, canActivate: [OktaAuthGuard] },
  { path: 'generate-report', component: ReportComponent, canActivate: [OktaAuthGuard] },
  { path: 'diaries', component: DiaryComponent, canActivate: [OktaAuthGuard] },
  { path: '', redirectTo: '/diaries', pathMatch: 'full' },
  { path: '**', redirectTo: '/diaries', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    TabbedMenuComponent,
    AskOracleFormComponent,
    TopFoodsResultAreaComponent,
    AddFoodDialogComponent,
    FoodLoggerEntryComponent,
    AddFoodFromTopFoodsComponent,
    ReportComponent,
    CalendarComponent,
    SideMenuComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  providers: [
    HttpClientModule,
    DiaryServiceService,
    AskOracleSharedDataService,
    FoodService,
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
