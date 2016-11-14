import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
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
               .post(this.baseUrl + 'register', user, this.jwt())
               .map((r: Response) => r.json())
               .catch((error: any) => Observable.throw(error.json().errors || 'Server error'))
  }

  getAll(): Observable<Array<User>> {
    return this.http
               .get(this.baseUrl + 'users', this.jwt())
               .map((r: Response) => r.json())
               .catch((error: any) => Observable.throw(error.json().errors || 'Server error'))
    
  }

  delete(id): Observable<String> {
        return this.http
               .delete(this.baseUrl + 'users/'+ id,  this.jwt())
               .map((r: Response) => r.json())
               .catch((error: any) => Observable.throw(error.json().errors || 'Server error'))
  }

  private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser && currentUser.token) {
      let headers = new Headers({'Authorization': `Bearer ${currentUser.token}` });
      return new RequestOptions({headers: headers});
    }
  }

}
