import { SideNavService } from '../side-nav/side-nav.service';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MdSidenavModule } from "@angular/material";
@Component({
  selector: 'menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.css']
})
export class MenuIconComponent implements OnInit {

  @Output() navToggle = new EventEmitter<boolean>();
  navOpen() {
    this.navToggle.emit(true);
  }
    
  sidenav;
  constructor(private sideNavService:SideNavService) {}
  ngOnInit() {console.log(this.sideNavService.sideNav);
    this.sidenav = this.sideNavService.sideNav;}

}
