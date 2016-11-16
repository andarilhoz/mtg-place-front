import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    baseUrl: String = 'http://localhost/api/';

    constructor(private http: Http) { }
 
    login(username, password) {
        return this.http.post( this.baseUrl + 'login', { username: username, password: password })
            .map((response: Response) => {
                //if logged will return 200 ok
            })
            .catch((error: any) => Observable.throw(error.json().errors || 'Server error'))
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}