import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  showAskOracleForm = false;

  constructor(router: Router) {
    router.events.subscribe(val => {
      console.log(`Route changed: ${val}`);
      if (val instanceof NavigationEnd) {
        this.showAskOracleForm = (val.urlAfterRedirects == '/ask-the-oracle');
      }
    });
  }

  ngOnInit(): void { }

}
