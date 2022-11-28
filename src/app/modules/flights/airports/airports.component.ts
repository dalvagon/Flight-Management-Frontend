import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Airport } from 'src/app/data/schema/airport';
import { FlightService } from 'src/app/data/service/flight.service';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css'],
})
export class AirportsComponent implements OnInit {
  airports$: Observable<Airport[]> = this.flightService.getAirports();

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {}
}
