import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';


import { UserService } from '../shared/user.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getHealth().subscribe((status: Object)=>{
      console.log(status);
    });
  }

}
