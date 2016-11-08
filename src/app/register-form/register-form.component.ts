import { Component, OnInit } from '@angular/core';

import { User } from './user.interface';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

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
    console.log(model,isValid);
  }

}
