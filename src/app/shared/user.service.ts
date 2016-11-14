import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../register-form/user.interface';

@Injectable()
export class UserService {
  baseUrl: String = 'http://localhost/api/';
  constructor(private http: Http) { }

  getHealth(): Observable<String> {
    return this.http
               .get(this.baseUrl + 'health')
               .map((r: Response) => r.json())
               .catch((error: any) => Observable.throw(error.json().errors || 'Server error'))
  }

  register(user: User): Observable<String> {
    return this.http
               .post(this.baseUrl + 'register', user)
               .map((r: Response) => r.json())
               .catch((error: any) => Observable.throw(error.json().errors || 'Server error'))
  }

}
