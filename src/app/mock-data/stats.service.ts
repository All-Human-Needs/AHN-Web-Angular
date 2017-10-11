import { HourlyStatistics } from './mock-data';
import { FootTraffic } from './mock-classes';
import { Injectable } from '@angular/core';

@Injectable()
export class StatsService{
    constructor(){}

    getStats():FootTraffic[]{
        return HourlyStatistics;
    }

    addStats(stat:FootTraffic){
        HourlyStatistics.push(stat);
    }

    getSelectedHourlyBusinessStats(id:string):FootTraffic[]{
        var stats = HourlyStatistics;
        var currBusinessStats:FootTraffic[]=[];
        var count = 0;

        for(var i = 0;i<stats.length;i++){
            
            if(stats[i].id === id){
                currBusinessStats[count]=stats[i];
                count++;
                
            }
            
        }
       
        return currBusinessStats;
    }

}