import { UserService } from './../user.service';
import { UserRegistrationComponent } from './../user-registration/user-registration.component';
import { Component } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { User } from '../Model/user';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: []
})
export class TaskListComponent {
  message: string;
  loggedIn = false;
  private user: User;
  constructor(private userService: UserService) { }

  ifLoggedIn() {
    if (this.userService.isUserLoggedIn()) {
      this.user = this.userService.getUserData();
      this.message = 'here is the tasks list for ' + this.user.UserName;
      this.loggedIn = true;

      // console.log(this.userService.isUserLoggedIn());
      return this.loggedIn;
    }

  }
}
