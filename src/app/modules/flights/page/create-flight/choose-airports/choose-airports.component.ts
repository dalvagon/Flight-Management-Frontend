import { FlightService } from 'src/app/data/service/flight.service';
import { AirportService } from 'src/app/data/service/airport.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { City } from 'src/app/data/schema/city';
import { Airport } from 'src/app/data/schema/airport';
import { first } from 'rxjs';

@Component({
  selector: 'app-choose-airports',
  templateUrl: './choose-airports.component.html',
  styleUrls: ['./choose-airports.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ChooseAirportsComponent implements OnInit {
  departureCity?: City;
  destinationCity?: City;
  departureAirports: Airport[] = [];
  destinationAirports: Airport[] = [];
  departureAirport?: Airport;
  destinationAirport?: Airport;

  constructor(
    private airportService: AirportService,
    private flightService: FlightService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.departureCity = this.airportService.departureCity;
    this.destinationCity = this.airportService.destinationCity;

    if (!this.departureCity || !this.destinationCity) {
      this.router.navigate(['/flights/create/choose-cities']);
    } else {
      this.airportService
        .getAirportsByCity(this.departureCity.name)
        .pipe(first())
        .subscribe((airports) =>
          airports.forEach((airport) => {
            this.departureAirports = [...this.departureAirports, airport];
          })
        );

      this.airportService
        .getAirportsByCity(this.destinationCity.name)
        .pipe(first())
        .subscribe((airports) =>
          airports.forEach(
            (airport) =>
              (this.destinationAirports = [
                ...this.destinationAirports,
                airport,
              ])
          )
        );
    }
  }

  submit() {
    if (this.departureAirport && this.destinationAirport) {
      console.log(this.departureAirport, this.destinationAirport);
      this.flightService.departureAirport = this.departureAirport;
      this.flightService.destinationAirport = this.destinationAirport;
      this.router.navigate(['/flights/create/add-flight-details']);
    }
  }
}
