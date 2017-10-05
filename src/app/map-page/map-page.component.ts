
import { SideNavService } from '../side-nav/side-nav.service';
import { Location } from '@angular/compiler-cli/src/diagnostics/symbols';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css',]
})

export class MapPageComponent implements OnInit{

  title: string = 'My first AGM project';
  lat: number = -33.924632;
  lng: number = 18.429371;


  public userLocation;

  ngOnInit() {

    if (navigator.geolocation) {
      this.sidenav = this.sideNavService.sideNav;
     
      navigator.geolocation.getCurrentPosition(function (place) {
        this.userLocation = {
          lat: 3,//place.coords.latitude,
          lng: 3,//place.coords.longitude,
          name: "user location",
        }

        console.log(this.userLocation);
      })
      
    }
  }


  @Output() navToggle = new EventEmitter<boolean>();
  navOpen() {
    this.navToggle.emit(true);
  }
   sidenav;
   constructor(private sideNavService:SideNavService) {}
   
   menuFilter(value:string){
    this.sideNavService.filter=value;
     console.log(this.sideNavService.filter);
  }
  

  customStyle = [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "transit",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ]

  locations: location[] = [
    {
      lat: -33.9217137,
      lng: 18.46171849999996,
      name: 'Groote Schuur Hospital',
    }, {
      lat: -33.9423756,
      lng: 18.463247300000035,
      name: 'Netcare UCT Private Academic Hospital',
    }, {
      lat: -33.9443605,
      lng: 18.49009860000001,
      name: 'Life Vincent Pallotti Hospital',
    }, {
      lat: -33.931401,
      lng: 18.45506899999998,
      name: 'Nedbank Salt River Cape',
    }, {
      lat: -33.923951,
      lng: 18.422884000000067,
      name: 'Nedbank Grand Central',
    },
    {
      lat: -33.91724,
      lng: 18.42728599999998,
      name: 'Nedbank Foreshore',
    }, {
      lat: -33.92765,
      lng: 18.4221,
      name: 'Department of Home Affairs Cape Town',
    }, {
      lat: -33.9012178,
      lng: 18.63154910000003,
      name: 'Department of Home Affairs Office',
    }, {
      lat: -34.0032484,
      lng: 18.4700239,
      name: 'Home Affairs Wynberg District',
    }]


}

//just making an interface for type safety sake
interface location {
  lat: number;
  lng: number;
  name: string;
}

// //What was I busy doing here?
// export class GmapComponent implements OnInit {
//   ngOnInit() {
//   }
// }
