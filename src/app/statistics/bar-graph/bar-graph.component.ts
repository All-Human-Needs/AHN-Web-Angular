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
  constructor(private dailyService : StatisticsService) { }

  getDailyData(){
   
    this.dailyService.getDailyStatistics().then(dailyStatistics => {
      
      this.dailyStatistics = dailyStatistics;
      let day:any =this.dailyStatistics[0].date.getDay();
      console.table(this.dailyStatistics);
      for(var i = 0;i<this.dailyStatistics.length;i++){
        let hours:any = this.dailyStatistics[i].date.getHours();
        let min:any = this.dailyStatistics[i].date.getMinutes();
        if(min<10)min='0'+min;
        if(hours<10)hours='0'+hours;
         this.barChartLabels[i] = hours +':'+min;
        this.numPeople[i] = this.dailyStatistics[i].numberOfPeople;
       
      }
      //  console.log(this.numPeople);
      //  console.log(this.barChartLabels);
      this.barChartData = [
        {data : this.numPeople, label : 'Tuesday'}
      ];
          });
  }


  ngOnInit() {
    //this.dailyService.getDailyStatistics().then(x => console.log(x));
    this.getDailyData();
  }


  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartColors:Array<any> = [
    { 
      hoverBackgroundColor:'#fff',
      backgroundColor:'#000',
      
    },
    
  ];


  public barChartData:any[]=[{data:[],label:''}]; //= [
  //   {data: [0,12,20,32,56,32,11,45,43,5,12,0], label: 'Monday'}
  // ];
   public barChartLabels:any[]=[]; //= [
  //   '07:00','07:30','08:00','08:30',
  //   '09:00','09:30','10:00','10:30',
  //   '11:00','11:30','12:00','12:30'];
 
 
}


