import { StatisticsService } from './../statistics.service';
import { DailyStatistcs } from './../mock-daily';
import { DailyStats } from './../dailyStats';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-spreadsheet',
  templateUrl: './spreadsheet.component.html',
  styleUrls: ['./spreadsheet.component.css'],
  providers:[StatisticsService]
})
export class SpreadsheetComponent implements OnInit {
  dailystats: DailyStats[];
  stats:DailyStats;

  constructor(private dailyService : StatisticsService) { }

  getDailyStats():void{
    this.dailyService.getDailyStatistics().then(dailystats=>this.dailystats = dailystats)
  }

  ngOnInit():void {
    this.getDailyStats();
  }

}
