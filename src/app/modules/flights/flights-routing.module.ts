import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirportsComponent } from './page/airports/airports.component';
import { AddFlightDetailsComponent } from './page/create-flight/add-flight-details/add-flight-details.component';
import { ChooseAirportsComponent } from './page/create-flight/choose-airports/choose-airports.component';
import { ChooseCitiesComponent } from './page/create-flight/choose-cities/choose-cities.component';
import { CreateFlightComponent } from './page/create-flight/create-flight.component';
import { FlightDetailsComponent } from './page/flight-details/flight-details.component';
import { FlightsComponent } from './page/flights/flights.component';
import { LandingComponent } from './page/landing/landing.component';

const routes: Routes = [
  {
    path: 'flights/create',
    redirectTo: 'flights/create/choose-cities',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: '',
        component: LandingComponent,
      },
      {
        path: 'flights',
        component: FlightsComponent,
      },
      {
        path: 'flights/create',
        component: CreateFlightComponent,
        children: [
          { path: 'choose-cities', component: ChooseCitiesComponent },
          { path: 'choose-airports', component: ChooseAirportsComponent },
          {
            path: 'add-flight-details',
            component: AddFlightDetailsComponent,
          },
        ],
      },
      {
        path: 'flights/:id',
        component: FlightDetailsComponent,
      },
      {
        path: 'airports',
        component: AirportsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightsRoutingModule {}
