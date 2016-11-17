import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(
    private http: Http,
    private router: Router ) {  }

  baseUrl: String = window.location.origin + '/api/';

  canActivate(): Observable<boolean> {
    return this.http
            .get(this.baseUrl + 'me')
            .map((auth) => {
              if(auth){
                return true;
              }else{
                this.router.navigate(['/login']);
               return false;
              }
            })
            .catch((error: any) => {
              this.router.navigate(['/login']);
              return Observable.throw(error.json().errors || 'Server error')
            })
  }
}
