import { User } from './../Model/user';
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
  private user: User;
  constructor(private http: Http, private userService: UserService) { }
  message = '';
  userLoggedIn = this.userService.isUserLoggedIn();
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
        // this.user = new User();
        // this.user.setUser(response.text());
        this.userService.userLoggedIn(response.text());
        this.userLoggedIn = true;
        // console.log(response);
        // console.log(response.text());
        // let text = JSON.parse(response.text());
        // console.log(text[0].UserName);
        // console.log(this.user.UserName);
      }
    }, error => {
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
        // this.userLoggedIn = true;
        this.userService.userLoggedIn(true);
      }
    }, error => {
      if (error) {
        this.message = 'something happened, try again later';
        // console.log(error);
      }
    });
  }

   logout() {
    this.userService.logout();
    this.userLoggedIn = false;
   }
}
