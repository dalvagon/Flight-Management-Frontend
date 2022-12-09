import { NgModule } from '@angular/core';
import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsComponent } from './page/flights/flights.component';
import { LandingComponent } from './page/landing/landing.component';
import { ButtonModule } from 'primeng/button';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FlightDetailsComponent } from './page/flight-details/flight-details.component';
import { CreateAirportComponent } from './page/create-airport/create-airport.component';
import { DialogModule } from 'primeng/dialog';
import { AirportsComponent } from './page/airports/airports.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FlightsComponent,
    LandingComponent,
    FlightDetailsComponent,
    CreateAirportComponent,
    AirportsComponent,
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    ButtonModule,
    AsyncPipe,
    DialogModule,
    ReactiveFormsModule,
  ],
})
export class FlightsModule {}
