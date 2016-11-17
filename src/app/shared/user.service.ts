import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/BehaviorSubject'

import { User } from '../register-form/user.interface';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class UserService {
  baseUrl: String = window.location.origin + '/api/';
  
  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) { };


  getAvatar(userId): Observable<string> {
    return this.http  
               .get(this.baseUrl + `users/${userId}/image`)
               .map((r: Response)=> r.toString())
               .catch((error: any) => Observable.throw(error.json().errors || 'Server error'))
  }

  getMe(): Observable<User> {
    return this.http
               .get(this.baseUrl + 'me')
               .map((r: Response) => r.json())
               .catch((error: any) => Observable.throw(error.json().errors || 'Server error'))
  }

  getHealth(): Observable<string> {
    return this.http
               .get(this.baseUrl + 'health')
               .map((r: Response) => r.json())
               .catch((error: any) => Observable.throw(error.json().errors || 'Server error'))
  }

  register(user: User): Observable<string> {
    return this.http
               .post(this.baseUrl + 'register', user)
               .map((r: Response) => r.json())
               .catch((error: any) => Observable.throw(error.json().errors || 'Server error'))
  }

  getAll(): Observable<Array<User>> {
    return this.http
               .get(this.baseUrl + 'users')
               .map((r: Response) => r.json())
               .catch((error: any) => Observable.throw(error.json().errors || 'Server error'))
    
  }

  delete(id): Observable<string> {
        return this.http
               .delete(this.baseUrl + 'users/'+ id)
               .map((r: Response) => r.json())
               .catch((error: any) => Observable.throw(error.json().errors || 'Server error'))
  }


}
