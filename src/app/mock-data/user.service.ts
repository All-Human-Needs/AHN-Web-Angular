import { Users } from './mock-data';
import { User } from './mock-classes';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    constructor(){}
    getUsers(): User[]{
        return Users;
    }

    getUser(username:string, password:string):User{
        var users:User[]=Users;
        var currUser:User;
        for(var i=0; i<users.length; i++){
            if (username===users[i].email&&password===users[i].password){
                currUser = users[i];
            }
        }

        return currUser;
    }

    isValidUser(username:string, password:string): boolean{
       var users=Users;
       var userFound:boolean=false;
       for(var i=0; i<users.length; i++){
           if (username===users[i].email&&password===users[i].password){
               userFound=true
           }
           else{
               userFound=false;
           }
       }
        return userFound;
    }
}
