import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { User } from './user.interface';
import { UserService } from '../shared/user.service';
import { AuthenticationService } from '../shared/authentication.service';

declare var Materialize: any;

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(
    private userService: UserService, 
    private router: Router,
    private authenticationService: AuthenticationService) { }

  public user: User;

  ngOnInit() {
    this.user = {
      username: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: ''
    }
  }

  save(model: User, isValid: boolean) {
    if(isValid){
      this.userService.register(model).subscribe(
        userId => {
          this.authenticationService.login(model.username, model.password)
              .subscribe(
                data=>{
                  Materialize.toast(`Usuario criado com sucesso `, 4000, 'blue rounded')
                  this.router.navigate(['/']);
                },
                err=>{
                  this.router.navigate(['/']);
                  console.log(err)
                }
              )
          
        },
        err => {
          err.forEach((error)=>{
            Materialize.toast((error.length > 1 ? error : error.message),4000, 'red rounded');
          })        
        }
      );
    }
  }

}
