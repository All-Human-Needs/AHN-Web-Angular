import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



import { User } from "../users/user";
import { Users } from "../users/mock-users";

@Component({
  selector: 'ahn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router:Router) {  }

  ngOnInit() {
  }

  login():void{
    //validate login

    //go to next page
    this.router.navigateByUrl('/client-home');
  }

}
