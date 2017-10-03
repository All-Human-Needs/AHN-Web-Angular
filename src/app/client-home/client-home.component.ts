import { SideNavService } from '../side-nav/side-nav.service';
import { AppComponent } from '../app.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: "app-client-home",
  templateUrl: "./client-home.component.html",
  styleUrls: ["./client-home.component.css"]
})
export class ClientHomeComponent implements OnInit {
  
  constructor() {}
  ngOnInit() {}
}
