import { StatsService } from '../mock-data/stats.service';
import { Business, FootTraffic } from '../mock-data/mock-classes';
import { BusinessService } from '../mock-data/business.service';
import { HourlyStatistics, RegisteredBusinesses } from '../mock-data/mock-data';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-system',
  templateUrl: './input-system.component.html',
  styleUrls: ['./input-system.component.css']
})
export class InputSystemComponent implements OnInit {
  numPeople:number=0;
  maxCapacity:number=50;
 // date:Date;
 businesses=this.businessService.getBusinesses();

  stats=this.statsService.getStats();
  
  constructor(private businessService:BusinessService, private statsService:StatsService) {}

  //push data to DB
  submit(){
  
var newStat:FootTraffic={
id:'Placeholder',
date:new Date(),
numberOfPeople:this.numPeople
}
    this.stats.push(newStat);
    console.log(this.stats);

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
    console.log(this.stats);
  }

}
