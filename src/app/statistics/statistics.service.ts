import { Injectable } from '@angular/core';

import { DailyStatistcs } from './mock-daily';
import { DailyStats } from './dailyStats';


@Injectable()
export class StatisticsService {

  constructor() { }

  getDailyStatistics(): Promise<DailyStats[]>{
    return Promise.resolve(DailyStatistcs);
  }

}
