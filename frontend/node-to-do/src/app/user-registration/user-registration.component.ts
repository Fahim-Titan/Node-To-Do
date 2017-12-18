import { Http, Headers, RequestOptions, ResponseContentType, RequestMethod } from '@angular/http';
import { UserService } from './../user.service';
import { Component, transition } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { Input } from '@angular/core/src/metadata/directives';
import { Response } from '@angular/http/src/static_response';
import { error } from 'selenium-webdriver';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  providers: []
})

export class UserRegistrationComponent {
  constructor(private http: Http, private userService: UserService) { }

  message = '';
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

  login(f) {
    this.userService.login(f).subscribe(response => {
      if (response.status === 200 ) {
        this.message = 'You are Logged IN!!';
        this.userService.userLoggedIn(true);
      }
    },error => {
      if (error) {
        this.message = 'sorry. wrong password';
        console.log(this.message);
      }
    });
  }

  register(r) {
    this.userService.register(r).subscribe(response => {
      if (response.status === 200) {
        this.message = 'You are Registered';
        this.userLoggedIn = true;
        this.userService.userLoggedIn(true);
      }
    }, error => {
      if (error) {
        this.message = 'something happened, try again later';
        // console.log(error);
      }
    });
  }
}
