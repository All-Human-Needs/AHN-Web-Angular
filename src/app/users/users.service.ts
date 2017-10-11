import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

import { User } from "./user";
import { Users } from "./mock-users";
//import { users } from "../mock-data/mock-data";

@Injectable()
export class UsersService {
  constructor(private _router: Router) {}
  // //get array of users
  // getUsers(): Promise<User[]> {
  //   return Promise.resolve(Users);
  // }
  // //get user from Users array with specified name and password
  // getUser(name: string, pswd: string): Promise<User> {
  //   return this.getUsers().then(users =>
  //     users.find(user => user.name === name && user.password === pswd)
  //   );
  // }

  // logout() {
  //   localStorage.removeItem("user");
  //   this._router.navigate(["login"]);
  // }

  // login(user) {
  //   var checkedUser = users.find(u => u.email === user.email);
  //   if (checkedUser && checkedUser.password === user.password) {
  //     // localStorage.setItem("user", checkedUser);
  //     this._router.navigate(["client-home"]);
  //     return true;
  //   }
  //   return false;
  // }

  // checkDetails() {
  //   if (localStorage.getItem("user") === null) {
  //     this._router.navigate(["Login"]);
  //   }
  // }
}
