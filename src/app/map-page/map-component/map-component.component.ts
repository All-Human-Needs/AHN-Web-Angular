import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']
})
export class MapComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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

//just making an interface for type safety sake
interface location {
  lat: number;
  lng: number;
  name: string;
}
