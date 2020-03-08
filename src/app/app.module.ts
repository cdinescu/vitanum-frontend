import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryComponent } from './components/diary/diary.component';
import { TabbedMenuComponent } from './components/tabbed-menu/tabbed-menu.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AskOracleComponent } from './components/ask-oracle/ask-oracle.component';
import { AskOracleFormComponent } from './components/ask-oracle-form/ask-oracle-form.component';
import { TopFoodsCountComponent } from './components/top-foods-count/top-foods-count.component';
import { TopFoodsResultAreaComponent } from './components/top-foods-result-area/top-foods-result-area.component';
import {DiaryServiceService} from '../app/services/diary-service.service'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'diaries/:id', component: DiaryComponent},
  { path: 'ask-the-oracle', component: TopFoodsResultAreaComponent },
  {path: 'diaries', component: DiaryComponent},
  {path: '', redirectTo: '/diaries', pathMatch: 'full'},
  {path: '**',  redirectTo: '/diaries', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    TabbedMenuComponent,
    SideMenuComponent,
    AskOracleComponent,
    AskOracleFormComponent,
    TopFoodsCountComponent,
    TopFoodsResultAreaComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [DiaryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
