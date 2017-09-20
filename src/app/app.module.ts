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
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from "./tab/tabs.component";
import { FooterComponent } from './footer/footer.component';






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
    TabComponent,
    TabsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
