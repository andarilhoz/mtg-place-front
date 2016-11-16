import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  user: any = {};
  logged: boolean = false;


  constructor(
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService) { }
  
  
  ngOnInit() {
    this.user = this.userService.getMe().subscribe(
      data => {
        this.logged = true;
      },
      error => {
        this.logged = false;
      });
      this.authenticationService.emittLogin.subscribe(
        loggin => {
          this.logged = loggin; 
        }
      );
  }

}
