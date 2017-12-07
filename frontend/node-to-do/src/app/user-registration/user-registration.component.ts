import { Http, Headers, RequestOptions, ResponseContentType, RequestMethod } from '@angular/http';
import { UserService } from './../user.service';
import { Component, transition } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { Input } from '@angular/core/src/metadata/directives';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  providers: []
})

export class UserRegistrationComponent {
  constructor(private http: Http, private userService: UserService) { }

  message = 'testing';
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
    // this.userService.login(f.value).subscribe(response => {
    //   console.log(response.json);
    // });
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    const options = new RequestOptions({
      url: 'http://localhost:3000/user/login',
      headers: header,
      responseType: ResponseContentType.Json,
      method: RequestMethod.Post,
      body: JSON.stringify(f)
    });
    this.http.post('http://localhost:3000/user/login', JSON.stringify(f), options).subscribe(response => {
      console.log(response);
      if (response.ok) {
        this.message = 'You are Logged IN!!';
        this.userLoggedIn = true;
        this.userService.userLoggedIn(true);
      }
    }, error => {
      if(error) {
        this.message = 'sorry. wrong password';
        console.log(this.message);
      }
    });
    console.log(f);
  }
}
