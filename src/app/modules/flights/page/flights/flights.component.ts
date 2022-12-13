import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Flight } from 'src/app/data/schema/flight';
import { FlightService } from 'src/app/data/service/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  flights: Flight[] = [];
  departureCity?: string;
  destinationCity?: string;

  constructor(
    private flightService: FlightService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.departureCity = params['departureCity'];
      this.destinationCity = params['destinationCity'];
    });

    console.log(this.departureCity, this.destinationCity);

    if (this.departureCity && this.destinationCity) {
      this.flightService
        .getFlights(this.departureCity, this.destinationCity)
        .pipe(first())
        .subscribe((data) =>
          data.forEach((flight) => {
            this.flights.push(flight);
          })
        );
    }
  }
}
