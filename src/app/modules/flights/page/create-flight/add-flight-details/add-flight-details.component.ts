import { Router } from '@angular/router';
import { FlightService } from 'src/app/data/service/flight.service';
import { Component, OnInit } from '@angular/core';
import { Airport } from 'src/app/data/schema/airport';

@Component({
  selector: 'app-add-flight-details',
  templateUrl: './add-flight-details.component.html',
  styleUrls: ['./add-flight-details.component.css'],
})
export class AddFlightDetailsComponent implements OnInit {
  departureAirport?: Airport;
  destinationAirport?: Airport;

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.departureAirport = this.flightService.departureAirport;
    this.destinationAirport = this.flightService.destinationAirport;

    // if (!this.departureAirport || !this.destinationAirport) {
    //   this.router.navigate(['/flights/create/choose-cities']);
    // }
  }
}
