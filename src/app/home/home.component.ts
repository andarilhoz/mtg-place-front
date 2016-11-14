import { Component, OnInit } from '@angular/core';
 
import { User } from '../register-form/user.interface';
import { UserService } from '../shared/user.service';
 
@Component({
    moduleId: module.id,
    templateUrl: './home.component.html'
})
 
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
 
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
 
    ngOnInit() {
        this.loadAllUsers();
    }
 
    deleteUser(id) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }
 
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}