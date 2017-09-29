import { StatisticsService } from './statistics/statistics.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { BusinessHomeComponent } from './business-home/business-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MapPageComponent } from './map-page/map-page.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { AppRoutingModule } from "./app-routing.module";

import { FooterComponent } from './footer/footer.component';
import { TabPanelComponent } from './statistics/tab-panel/tab-panel.component';
import { SpreadsheetComponent } from './statistics/spreadsheet/spreadsheet.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './statistics/line-chart/line-chart.component';
import { BarGraphComponent } from './statistics/bar-graph/bar-graph.component';





@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    LoginComponent,
    ClientHomeComponent,
    BusinessHomeComponent,
    StatisticsComponent,
    MapPageComponent,
    SignInComponent,
    FooterComponent,
    TabPanelComponent,
    SpreadsheetComponent,
    LineChartComponent,
    BarGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [StatisticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
