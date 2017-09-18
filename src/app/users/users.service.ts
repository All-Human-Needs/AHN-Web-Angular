import { Injectable } from '@angular/core';

import { User } from "./user";
import { Users } from "./mock-users";

@Injectable()
export class UsersService {

  constructor() { }
  //get array of users
  getUsers(): Promise<User[]>{
    return Promise.resolve(Users);
  }
  //get user from Users array with specified name and password
  getUser(name: string,pswd:string): Promise<User>{
    return this.getUsers().then(users => users.find(user => user.name ===name && user.password ===pswd));
  }

}
