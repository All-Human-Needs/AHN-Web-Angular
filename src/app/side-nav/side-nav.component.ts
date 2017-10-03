import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  encapsulation:ViewEncapsulation.None,
  preserveWhitespaces:false,
})
export class SideNavComponent{
  @ViewChild('sidenav') sidenav:ElementRef;

}
