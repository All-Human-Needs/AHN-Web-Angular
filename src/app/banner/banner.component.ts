import { SideNavComponent } from '../side-nav/side-nav.component';
import { Component, Input, OnInit } from '@angular/core';
import { MdSidenavModule } from "@angular/material";

@Component({
  selector: 'ahn-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  title = 'All Human Needs';

  @Input()
  sidenav;

  constructor() {

  }
  
  ngOnInit() {
    console.log(this.sidenav)
  }

}
