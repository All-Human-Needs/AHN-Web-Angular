import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-places-list',
  templateUrl: './map-places-list.component.html',
  styleUrls: ['./map-places-list.component.css']
})
export class MapPlacesListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //slider start

  toggleOpen(){
    var element = document.getElementById("thing");
    element.classList.toggle("open");
  }

  //slider end

}
