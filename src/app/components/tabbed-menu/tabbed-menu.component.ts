import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-tabbed-menu',
  templateUrl: './tabbed-menu.component.html',
  styleUrls: ['./tabbed-menu.component.css'],

  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class TabbedMenuComponent implements OnInit {
  diaryMenuState = 'out';
  askTheOracleMenuState = 'out';

  constructor() { }

  ngOnInit(): void {
  }

  toggleDiary() {
    // 1-line if statement that toggles the value:
    this.askTheOracleMenuState = 'out';
    this.diaryMenuState = this.diaryMenuState === 'out' ? 'in' : 'out';
  }

  toggleAskTheOracle() {
    this.diaryMenuState = 'out';
    this.askTheOracleMenuState = this.askTheOracleMenuState === 'out' ? 'in' : 'out';
  }

}
