
import { SideNavService } from './side-nav.service';
import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  encapsulation:ViewEncapsulation.None,
  preserveWhitespaces:false,
})
export class SideNavComponent{

@ViewChild('sidenav') sideNav:ElementRef;
  constructor(private sideNavService:SideNavService){
    
  }

  ngAfterViewInit():void{
    // console.log(this.sideNav);
this.sideNavService.sideNav = this.sideNav;
// console.log(this.sideNavService.sideNav);
  }
  
}
