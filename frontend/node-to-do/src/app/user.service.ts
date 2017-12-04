import { Injectable, transition } from '@angular/core';

@Injectable()
export class UserService {
  LoggedIn = false;

  isUserLoggedIn() {
    console.log(this.LoggedIn);
    return this.LoggedIn;
  }
  userLoggedIn(user) {
    this.LoggedIn = true;
    // console.log(this.LoggedIn);
  }
}
