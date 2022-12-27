import { AuthGuard } from './../../core/guard/auth.guard';
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
import { AdminGuard } from 'src/app/core/guard/admin.guard';

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
        canActivate: [AuthGuard],
      },
      {
        path: 'flights/create',
        component: CreateFlightComponent,
        children: [
          {
            path: 'choose-cities',
            component: ChooseCitiesComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'choose-airports',
            component: ChooseAirportsComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'add-flight-details',
            component: AddFlightDetailsComponent,
            canActivate: [AuthGuard],
          },
        ],
        canActivate: [AuthGuard, AdminGuard],
      },
      {
        path: 'flights/:id',
        component: FlightDetailsComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
      {
        path: 'airports',
        component: AirportsComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightsRoutingModule {}
