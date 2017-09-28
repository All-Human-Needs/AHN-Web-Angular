import { AgmCoreModule } from '@agm/core';
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
import { MapFiltersComponent } from './map-page/map-filters/map-filters.component';
import { MapSearchComponent } from './map-page/map-search/map-search.component';
import { MapPlacesListComponent } from './map-page/map-places-list/map-places-list.component';
import { MapComponent } from './map-page/map/map.component';


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
    MapFiltersComponent,
    MapSearchComponent,
    MapPlacesListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCP2Hh22RK96_fPIFSgIcBZ-_E48-yY4P0',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
