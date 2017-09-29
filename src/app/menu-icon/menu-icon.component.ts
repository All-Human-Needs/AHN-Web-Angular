import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.css']
})
export class MenuIconComponent implements OnInit {
  isClicked:boolean;
  
     onClick() {
      this.isClicked=!this.isClicked;
  }
    
  constructor() { }

  ngOnInit() {
  }

}
