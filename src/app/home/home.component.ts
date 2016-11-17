import { Component, OnInit } from '@angular/core';
 
import { UserService } from '../shared/user.service';
 
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
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