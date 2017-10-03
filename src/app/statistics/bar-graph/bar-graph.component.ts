import { DailyFootTraffic } from './../foot-traffic-stats';
import { StatisticsService } from './../statistics.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {
  dailyStatistics: DailyFootTraffic[];
  numPeople:number[]=[];
  //barchart initialisation
  barChartData:any[]=[{data:[],label:''}]; 
  barChartLabels:any[]=[]; 
  barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    
  };
  
  barChartType:string = 'bar';
  barChartLegend:boolean = true;
  barChartColors:Array<any> = [
   { 
     hoverBackgroundColor:'#fff',
     backgroundColor:'#000',
   },  
  ];

  constructor(private dailyService : StatisticsService) { }

  //populate bar chart 
  getDailyData(){
   
    this.dailyService.getDailyStatistics().then(dailyStatistics => {
      
      this.dailyStatistics = dailyStatistics;
      let day:any =this.dailyStatistics[0].date.getDay();
      for(var i = 0;i<this.dailyStatistics.length;i++){
        let hours:any = this.dailyStatistics[i].date.getHours();
        let min:any = this.dailyStatistics[i].date.getMinutes();
        if(min<10)min='0'+min;
        if(hours<10)hours='0'+hours;
         this.barChartLabels[i] = hours +':'+min;
        this.numPeople[i] = this.dailyStatistics[i].numberOfPeople;
       
      }
  
      this.barChartData = [
        {data : this.numPeople, label : 'Tuesday'}
      ];
          });
  }


  ngOnInit() {
    this.getDailyData();
  }
 
}


