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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CreateFlightComponent } from './page/create-flight/create-flight.component';
import { StepsModule } from 'primeng/steps';
import { ChooseCitiesComponent } from './page/create-flight/choose-cities/choose-cities.component';
import { ChooseAirportsComponent } from './page/create-flight/choose-airports/choose-airports.component';
import { AddFlightDetailsComponent } from './page/create-flight/add-flight-details/add-flight-details.component';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  declarations: [
    FlightsComponent,
    LandingComponent,
    FlightDetailsComponent,
    CreateAirportComponent,
    AirportsComponent,
    CreateFlightComponent,
    ChooseCitiesComponent,
    ChooseAirportsComponent,
    AddFlightDetailsComponent,
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    ButtonModule,
    AsyncPipe,
    DialogModule,
    ReactiveFormsModule,
    DropdownModule,
    FormsModule,
    StepsModule,
    ListboxModule,
  ],
})
export class FlightsModule {}
