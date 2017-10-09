
import { SideNavService } from '../side-nav/side-nav.service';
import { Location } from '@angular/compiler-cli/src/diagnostics/symbols';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css',]
})

export class MapPageComponent implements OnInit {


  ngOnInit() {
  }

  @Output() navToggle = new EventEmitter<boolean>();
  navOpen() {
    this.navToggle.emit(true);
  }
  

  sidenav;
  constructor(private sideNavService: SideNavService) { }


  menuFilter(value: string) {
    this.sideNavService.filter = value;
    console.log(this.sideNavService.filter);
  }
}



// //What was I busy doing here?
// export class GmapComponent implements OnInit {
//   ngOnInit() {
//   }
// }
