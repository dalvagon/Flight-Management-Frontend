import { Component, OnInit } from '@angular/core';
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

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.flightService
      .getFlights()
      .pipe(first())
      .subscribe((data) =>
        data.forEach((flight) => {
          this.flights.push(flight);
        })
      );
  }
}
