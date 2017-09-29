import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
