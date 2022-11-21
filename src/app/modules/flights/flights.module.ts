import { NgModule } from '@angular/core';
import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsComponent } from './page/flights/flights.component';
import { LandingComponent } from './page/landing/landing.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [FlightsComponent, LandingComponent],
  imports: [FlightsRoutingModule, ButtonModule],
})
export class FlightsModule {}
