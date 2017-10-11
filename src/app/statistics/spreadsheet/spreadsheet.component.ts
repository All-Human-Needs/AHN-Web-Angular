import { FootTraffic } from '../../mock-data/mock-classes';
import { StatsService } from '../../mock-data/stats.service';
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

  hourlyStats:FootTraffic[];

  constructor(private _statsService:StatsService) {}

  getHourlyStats(){
    this.hourlyStats =this._statsService.getSelectedHourlyBusinessStats("ad02b")
  }
  
  ngOnInit():void {
    
    this.getHourlyStats();
   
  }

}
