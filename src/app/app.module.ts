import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule 
  ],
  declarations: [ 
    AppComponent,
    LoginComponent, 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
