import { BusinessService } from './../../mock-data/business.service';
import { Business } from './../../mock-data/mock-classes';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css'],
  providers:[BusinessService]
})
export class MapComponentComponent implements OnInit {

  title: string = 'map-blep';
  lat: number = -33.924632;
  lng: number = 18.429371;

  constructor(private businessService:BusinessService) { }

  public userLocation;

  ngOnInit() {
    //////////////////////////////////////////////
    // FIND USER LOCATION START
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(function (place) {
        this.userLocation = {
          lat: place.coords.latitude,
          lng: place.coords.longitude,
          name: "user location",
        }
        console.log(this.userLocation);
      });
    }
    // FIND USER LOCATION END
    ///////////////////////////////////////////////
  }

  locations:Business[] = this.businessService.getBusinesses();


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

}