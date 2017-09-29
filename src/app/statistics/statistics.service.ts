import { DailyFootTraffic } from './foot-traffic-stats';
import { Injectable } from '@angular/core';

import { DailyStatistics } from './mock-daily';



@Injectable()
export class StatisticsService {

  constructor() { }

  getDailyStatistics(): Promise<DailyFootTraffic[]>{
    return Promise.resolve(DailyStatistics);
  }

  // getDailyTimes(): Promise<Date[]>{
  //   return Promise.resolve(DailyStatistcs);
  // }

}
