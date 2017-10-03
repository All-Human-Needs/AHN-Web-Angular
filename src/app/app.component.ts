import { SideNavService } from './side-nav/side-nav.service';
import { SideNavComponent } from './side-nav/side-nav.component';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
  title = 'All Human Needs';
  // @ViewChild('sidenav') sidenav:ElementRef;
}
