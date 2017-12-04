import { UserService } from './../user.service';
import { Component, transition } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  providers: []
})

export class UserRegistrationComponent {
  constructor(private userService: UserService) { }

  message: string;
  userLoggedIn = false;
  registerForm = false;
  LoginForm= true;
  switchForm() {
    if (this.registerForm) {
      this.registerForm = false;
      this.LoginForm = true;
    }else {
      this.registerForm = true;
      this.LoginForm = false;
    }
  }

  checkPasswordMatch(Password, retypePassword) {
    if (Password.value === retypePassword.value) {
      return true;
    }else {
      return false;
    }
  }

  login(userName, password) {
    this.message = 'You are Logged IN!!';
    this.userLoggedIn = true;
    this.userService.userLoggedIn(true);
  }
}
