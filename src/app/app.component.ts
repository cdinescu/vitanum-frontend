import { Component, OnInit } from '@angular/core';
import { OktaAuthService, UserClaims } from '@okta/okta-angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vitanum-frontend';
  isAuthenticated: boolean;

  constructor(public oktaAuth: OktaAuthService, private router: Router, private route: ActivatedRoute) { }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

}
