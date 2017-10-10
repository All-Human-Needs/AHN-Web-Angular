import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-system',
  templateUrl: './input-system.component.html',
  styleUrls: ['./input-system.component.css']
})
export class InputSystemComponent implements OnInit {
  numPeople:number=0;
  maxCapacity:number=50;
  date:Date;
  constructor() { }

  //push data to DB
  submit(){
    
  }

// add & subtract

// operator(num:number){
//   if(this.numPeople<0){
//     this.numPeople=0
//   }else{
//     this.numPeople+=num;
//   }
  
// }

  ngOnInit() {
  }

}
