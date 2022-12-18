import { FormBuilder, Validators } from '@angular/forms';
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

  form = this.fb.group({
    departureAirport: ['', [Validators.required]],
    destinationAirport: ['', [Validators.required]],
  });

  constructor(
    private airportService: AirportService,
    private router: Router,
    private fb: FormBuilder
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
            console.log(airport);
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
    console.log(
      this.form.get('departureAirport')?.value,
      this.form.get('destinationAirport')?.value
    );
  }
}
