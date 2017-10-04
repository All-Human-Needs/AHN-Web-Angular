
import { SideNavService } from './side-nav.service';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  encapsulation:ViewEncapsulation.None,
  preserveWhitespaces:false,
})
export class SideNavComponent implements OnInit{

@ViewChild('sidenav') sideNav:ElementRef;
menuFilter:string;
  constructor(private sideNavService:SideNavService){

  }

  ngOnChanges(){
    this.menuFilter= this.sideNavService.filter;
    console.log(this.sideNavService.filter);
  }

ngOnInit(){

}

  ngAfterViewInit():void{
    // console.log(this.sideNav);
this.sideNavService.sideNav = this.sideNav;


  }
  
}
