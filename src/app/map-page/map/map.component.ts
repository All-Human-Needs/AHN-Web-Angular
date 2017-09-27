import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  initMap() {

    //test variable also place to centre map on initialization
    var capeTown = {
      lat: -33.9231502, lng: 18.4472879

    };

    //disabling labels and Points Of interest on map so we can insert our own
    var map = new google.maps.Map(document.getElementById('map-GM'), {
      zoom: 13,
      center: capeTown,
      styles: [
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
    });
  }

}
