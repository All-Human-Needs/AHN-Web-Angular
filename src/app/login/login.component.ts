import { Component, OnInit } from '@angular/core';

import { User } from "../users/user";
import { Users } from "../users/mock-users";

@Component({
  selector: 'ahn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login():void{
    //validate login
  }

}
