import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { AlertService } from '../shared/alert.service'
import { AuthenticationService } from '../shared/authentication.service'
import { UserService } from '../shared/user.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.authenticationService.logout();
  }

  login(){
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['/home']);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });    
  }

}
