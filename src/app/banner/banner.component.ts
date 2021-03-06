import { SideNavService } from '../side-nav/side-nav.service';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MdSidenavModule } from "@angular/material";

@Component({
  selector: 'ahn-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  title = 'All Human Needs';

  // @Input()
  //  sidenav;
  @Output() navToggle = new EventEmitter<boolean>();

 
  sidenav;
  constructor(private sideNavService:SideNavService) {}
  ngOnInit() {
    // console.log(this.sideNavService.sideNav);
    this.sidenav = this.sideNavService.sideNav;

  }
  
}
