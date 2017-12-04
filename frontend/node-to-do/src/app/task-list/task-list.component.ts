import { UserService } from './../user.service';
import { UserRegistrationComponent } from './../user-registration/user-registration.component';
import { Component } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: []
})
export class TaskListComponent {
  message: string;
  loggedIn = false;
  constructor(private userService: UserService) { }

  login() {
    if (this.userService.isUserLoggedIn()) {
      this.message = 'here is the tasks list';
      this.loggedIn = true;

      // console.log(this.userService.isUserLoggedIn());
      return this.loggedIn;
    }

  }
}
