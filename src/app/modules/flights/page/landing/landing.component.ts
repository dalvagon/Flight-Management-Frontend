import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { City } from 'src/app/data/schema/city';
import { Country } from 'src/app/data/schema/country';
import { RegionService } from 'src/app/data/service/region.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingComponent implements OnInit {
  countries: Country[] = [];
  departureCities: City[] = [];
  arrivalCities: City[] = [];
  selectedDepartureCountry?: Country;
  selectedDepartureCity?: City;
  selectedDestinationCountry?: Country;
  selectedDestinationCity?: City;
  departureCitySelected: boolean = false;

  form = this.fb.group({
    country: ['', [Validators.required]],
    city: ['', [Validators.required]],
  });

  constructor(
    private regionsService: RegionService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.regionsService
      .getCountries()
      .pipe(first())
      .subscribe((data) =>
        data.forEach((country) => {
          this.countries.push(country);
        })
      );
  }

  onDepartureCountrySelected($event: any) {
    const countryName = $event.value.name;
    this.departureCities = [];

    this.regionsService
      .getCitiesForCountry(countryName)
      .pipe(first())
      .subscribe((data) =>
        data.forEach((city) => {
          this.departureCities.push(city);
        })
      );
  }

  onArrivalCountrySelected($event: any) {
    const countryName = $event.value.name;
    this.arrivalCities = [];

    this.regionsService
      .getCitiesForCountry(countryName)
      .pipe(first())
      .subscribe((data) =>
        data.forEach((city) => {
          this.arrivalCities.push(city);
        })
      );
  }

  onDepartureCitySelected($event: any) {
    this.departureCitySelected = true;
  }

  submit() {
    console.log(
      this.selectedDepartureCity?.name +
        ' ' +
        this.selectedDestinationCity?.name
    );

    this.router.navigate(['/flights'], {
      queryParams: {
        departureCity: this.selectedDepartureCity?.name,
        destinationCity: this.selectedDestinationCity?.name,
      },
    });
  }
}
