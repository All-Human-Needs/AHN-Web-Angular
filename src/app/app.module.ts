
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { StatisticsService } from './statistics/statistics.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MaterialsModule } from './materials/materials.module';

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

import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { SideNavComponent } from './side-nav/side-nav.component';





import { MapFiltersComponent } from './map-page/map-filters/map-filters.component';
import { MapSearchComponent } from './map-page/map-search/map-search.component';
import { MapPlacesListComponent } from './map-page/map-places-list/map-places-list.component';
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
    MenuIconComponent,
    SideNavComponent,
    MapFiltersComponent,
    MapSearchComponent,
    MapPlacesListComponent,
    LineChartComponent,
    BarGraphComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialsModule,

    
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCP2Hh22RK96_fPIFSgIcBZ-_E48-yY4P0',
    }),
    ChartsModule,
  ],
  
  providers: [StatisticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
