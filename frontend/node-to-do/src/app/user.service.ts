import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, ResponseContentType, RequestMethod } from '@angular/http';
// import { RequestOptions } from '@angular/http/src/base_request_options';
// import { ResponseContentType, RequestMethod } from '@angular/http/src/enums';


@Injectable()
export class UserService {
  private url = 'http://localhost:3000/user';
  constructor(private http: Http) {}
  LoggedIn = false;

  isUserLoggedIn() {
    console.log(this.LoggedIn);
    return this.LoggedIn;
  }
  userLoggedIn(user) {
    this.LoggedIn = true;
    // console.log(this.LoggedIn);
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
    console.log(f);
    return this.http.post('http://localhost:3000/user/login', JSON.stringify(f) , options);
  }
}
