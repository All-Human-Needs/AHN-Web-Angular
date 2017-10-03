import { ColorsDisplay } from 'jasmine-spec-reporter/built/display/colors-display';
import { Component, OnInit } from '@angular/core';

import { DailyStatistics } from './../mock-daily';
import { DailyFootTraffic } from './../foot-traffic-stats';
import { StatisticsService } from './../statistics.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
  providers:[StatisticsService]
})
export class LineChartComponent implements OnInit {
  dailyStatistics: DailyFootTraffic[];
  numPeople:number[]=[];

// lineChart initialisation
public lineChartData:Array<any> = [
  {data: [], label: '',gridLines:{color:'#000',lineWidth:1}},
 
];
public lineChartLabels:Array<any> = [];
public lineChartOptions:any = {
  responsive: true,
  
};
public lineChartColors:Array<any> = [
  { 
    backgroundColor: 'rgba(98, 160, 252,0.5)',
    borderColor: 'rgb(168, 179, 196)',
    pointBackgroundColor: 'rgb(155, 177, 198)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: 'rgb(79, 169, 255)',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)',
  }
  
   
   
    
 
  
];
public lineChartLegend:boolean = true;
public lineChartType:string = 'line';

  constructor(private dailyService : StatisticsService) {}

  getDailyData(){
    
     this.dailyService.getDailyStatistics().then(dailyStatistics => {
       
       this.dailyStatistics = dailyStatistics;
       let day:any =this.dailyStatistics[0].date.getDay();
       for(var i = 0;i<this.dailyStatistics.length;i++){
         let hours:any = this.dailyStatistics[i].date.getHours();
         let min:any = this.dailyStatistics[i].date.getMinutes();
         if(min<10)min='0'+min;
         if(hours<10)hours='0'+hours;
          this.lineChartLabels[i] = hours +':'+min;
         this.numPeople[i] = this.dailyStatistics[i].numberOfPeople;
        
       }
       this.lineChartData = [{data : this.numPeople, label : 'Tuesday', }];});
   }

  ngOnInit() {
    this.getDailyData();
    
  }
  
}
