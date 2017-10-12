import { StatsService } from './../../mock-data/stats.service';
import { BusinessService } from './../../mock-data/business.service';
import { Business, FootTraffic } from './../../mock-data/mock-classes';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css'],
  providers: [BusinessService]
})

export class MapComponentComponent implements OnInit {

  // the variables for the map itself's initialization
  title: string = 'map-blep';
  lat: number = -33.924632;
  lng: number = 18.429371;
  numPeople: number;
  selectedStats: FootTraffic[] = [];

  // gets array of bussinesses for the initialization of the markers
  locations: Business[] = this.businessService.getBusinesses();
  currentPeople: number[];

  
  userLocation:useloc;

  getUserLocation() {

    if (navigator.geolocation) {
      console.log("This is navigator geolocation"+navigator.geolocation);
      navigator.geolocation.getCurrentPosition(function (position) {
        this.userLocation.lat = position.coords.latitude;
        this.userLocation.lng = position.coords.longitude;
      }
    )
    }
    
  }

  constructor(private businessService: BusinessService, private stats: StatsService) {
  }

  ngOnInit() {
    this.getUserLocation();
    // for (var i = 0; i < this.locations.length; i++) {
    //   console.log(this.getCurrentPeople(this.locations[i].id));

    //   this.currentPeople[i] = this.getCurrentPeople(this.locations[i].id);
    // }
    //////////////////////////////////////////////
    // FIND USER LOCATION START
    // if (navigator.geolocation) {

    //   navigator.geolocation.getCurrentPosition(function (place) {
    //     this.userLocation = {
    //       lat: place.coords.latitude,
    //       lng: place.coords.longitude,
    //       name: "user location",
    //     }
    //     console.log(this.userLocation);
    //   });
    // }
    // FIND USER LOCATION END
    ///////////////////////////////////////////////

  }

  getCurrentPeople(givenId: string): number {
    this.selectedStats = this.stats.getSelectedHourlyBusinessStats("001");

    var record: FootTraffic = this.selectedStats[0];
    for (var i = 0; i < this.selectedStats.length; i++) {
      var temprecord = this.selectedStats[i];
      if (temprecord.date > record.date) {
        record = temprecord;
      }
    }

    return record.numberOfPeople;
  }

  ///////////////////////////////////////////////
  // custom styles for removing all the markers that aren't ours
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
  ///////////////////////////////////////////////

}

interface useloc{
  lat:number;
  lng:number;
}