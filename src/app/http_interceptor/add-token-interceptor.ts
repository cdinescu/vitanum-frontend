import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';


@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {
  oktaAuthToken: string;

  constructor(private http: HttpClient, public oktaAuth: OktaAuthService) {
    this.oktaAuth.getAccessToken().then(token => {
      if (token != null) {
        this.oktaAuthToken = token;
      }
    });

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`AddTokenInterceptor - ${req.url}`);

    const jsonReq: HttpRequest<any> = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.oktaAuthToken}`
      }
    });

    return next.handle(jsonReq);
  }

}
