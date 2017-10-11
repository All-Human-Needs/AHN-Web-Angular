import { StatsService } from './../../mock-data/stats.service';
import { FootTraffic } from './../../mock-data/mock-classes';
import { ColorsDisplay } from 'jasmine-spec-reporter/built/display/colors-display';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
  providers:[]
})
export class LineChartComponent implements OnInit {
  numPeople:number[]=[];
  stats:FootTraffic[];

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

  constructor(private _statsService:StatsService) {}

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
           this.lineChartLabels[i] = hours +':'+min;
          this.numPeople[i] = this.stats[i].numberOfPeople;
         
        }
        this.lineChartData = [
                {data : this.numPeople, label : 'Tuesday'}
              ];
  }

  ngOnInit() {
    this.setDailyStats();
    
  }
  
}
