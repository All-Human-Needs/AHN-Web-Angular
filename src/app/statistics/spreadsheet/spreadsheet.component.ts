import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { StatisticsService } from './../statistics.service';
import { DailyStatistics } from './../mock-daily';
import { DailyFootTraffic } from './../foot-traffic-stats';



@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.css'],
})
export class SpreadsheetComponent implements OnInit {
   dailyStatistics: DailyFootTraffic[];
  // stats:DailyFootTraffic;

  constructor(private dailyService : StatisticsService) { 
    
  }

  getDailyStats(){
     this.dailyService.getDailyStatistics().then( dailyStatistics=> this.dailyStatistics=dailyStatistics);
    // this.dailyService.getDailyStatistics().then(x => {

    // });
    
  }
  
  ngOnInit():void {
    // console.table(this.getDailyStats());
    this.getDailyStats();
  }

}
