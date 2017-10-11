import { FootTraffic } from './../../mock-data/mock-classes';
import { StatsService } from './../../mock-data/stats.service';


import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {
  
  numPeople:number[]=[];
  stats:FootTraffic[];

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

  constructor(private _statsService:StatsService) { }
  

  getStats():FootTraffic[]{
    return this._statsService.getSelectedHourlyBusinessStats("ad02b")
  }

  setDailyStats(){
    this.stats=this.getStats();
    
        for(var i = 0;i<this.stats.length;i++){
          let day:any =this.stats[0].date.getDay();
          let hours:any = this.stats[i].date.getHours();
          let min:any = this.stats[i].date.getMinutes();
          if(min<10)min='0'+min;
          if(hours<10)hours='0'+hours;
           this.barChartLabels[i] = hours +':'+min;
          this.numPeople[i] = this.stats[i].numberOfPeople;
         
        }
        this.barChartData = [
                {data : this.numPeople, label : 'Tuesday'}
              ];
  }
  




  ngOnInit() {
    this.setDailyStats();
  }
 
}


