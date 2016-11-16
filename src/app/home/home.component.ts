import { Component, OnInit } from '@angular/core';
 
import { UserService } from '../shared/user.service';
 
@Component({
    templateUrl: './home.component.html'
})
 
export class HomeComponent implements OnInit {
    user: any = {};

    constructor(private userService: UserService) {  }
 
    ngOnInit() {
      this.userService.getMe().subscribe(
        data => {
          this.user = data;
        },
        error => {
          console.log(error)
        }
      )
    }
 
}