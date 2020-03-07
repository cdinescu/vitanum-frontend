import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryComponent } from './components/diary/diary.component';
import { TabbedMenuComponent } from './components/tabbed-menu/tabbed-menu.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AskOracleComponent } from './components/ask-oracle/ask-oracle.component';
import { AskOracleFormComponent } from './components/ask-oracle-form/ask-oracle-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    TabbedMenuComponent,
    SideMenuComponent,
    AskOracleComponent,
    AskOracleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
