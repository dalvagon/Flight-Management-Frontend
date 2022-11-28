import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirportsComponent } from './airports/airports.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightsComponent } from './page/flights/flights.component';
import { LandingComponent } from './page/landing/landing.component';

const routes: Routes = [
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
