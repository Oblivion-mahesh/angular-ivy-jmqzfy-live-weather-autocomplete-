/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TodayComponent } from './today/today.component';
import { WeatherService } from './weather.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TodayComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WeatherService]
})
export class AppModule { }
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { TodayComponent } from './today/today.component';
import { WeatherService } from './weather.service';


@NgModule({
  imports:      [ BrowserModule, HttpClientModule,GooglePlaceModule  ],
  declarations: [ AppComponent, HelloComponent, TodayComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WeatherService]
})
export class AppModule { }
