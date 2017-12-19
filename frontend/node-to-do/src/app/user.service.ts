import { User } from './Model/user';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, ResponseContentType, RequestMethod } from '@angular/http';
import { headersToString } from 'selenium-webdriver/http';
// import { RequestOptions } from '@angular/http/src/base_request_options';
// import { ResponseContentType, RequestMethod } from '@angular/http/src/enums';


@Injectable()
export class UserService {
  private mainUrl = 'http://localhost:3000/user';
  private user: User;
  constructor(private http: Http) {}

  isUserLoggedIn() {
    // console.log(this.LoggedIn);
    if (localStorage.getItem('user') === null) {
      // console.log(localStorage.getItem('user'));
      return false;
    }
    return true;
  }
  userLoggedIn(jsonData) {
    this.user = new User().setUser(jsonData);
    // this.user.setUser(jsonData);
    localStorage.setItem('user', JSON.stringify(this.user));
    // console.log(this.LoggedIn);
  }

  getUserData() {
    // console.log(localStorage.getItem('user'));
    this.user = new User().getUser(localStorage.getItem('user'));
    return this.user;
  }



  login(f) {
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    const options = new RequestOptions({
      url: 'http://localhost:3000/user/login',
      headers: header,
      responseType: ResponseContentType.Json,
      method: RequestMethod.Post,
      body: JSON.stringify(f)
    });
    // console.log(f);
    return this.http.post('http://localhost:3000/user/login', JSON.stringify(f) , options);
  }


  register(r) {
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    const options = new RequestOptions({
      url: this.mainUrl + '/registration',
      headers: header,
      responseType: ResponseContentType.Json,
      method: RequestMethod.Post,
      body: JSON.stringify(r)
    });

    return this.http.post(this.mainUrl + '/registration', JSON.stringify(r), options);
  }

  logout() {
    localStorage.removeItem('user');
  }
}
