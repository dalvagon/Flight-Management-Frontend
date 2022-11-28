import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/data/schema/flight';
import { FlightService } from 'src/app/data/service/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  flights$: Observable<Flight[]> = this.flightService.getFlights();

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {}
}
