import { NgModule } from '@angular/core';
import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsComponent } from './page/flights/flights.component';
import { LandingComponent } from './page/landing/landing.component';
import { ButtonModule } from 'primeng/button';
import { AsyncPipe, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { AirportsComponent } from './airports/airports.component';

@NgModule({
  declarations: [FlightsComponent, LandingComponent, FlightDetailsComponent, AirportsComponent],
  imports: [CommonModule, FlightsRoutingModule, ButtonModule, AsyncPipe],
})
export class FlightsModule {}
