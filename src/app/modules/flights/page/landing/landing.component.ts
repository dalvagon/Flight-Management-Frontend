import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  destinationCities: City[] = [];
  selectedDepartureCountry?: Country;
  selectedDepartureCity?: City;
  selectedDestinationCountry?: Country;
  selectedDestinationCity?: City;
  departureCitySelected: boolean = false;
  destinationCitySelected: boolean = false;

  constructor(private regionService: RegionService, private router: Router) {}

  ngOnInit(): void {
    this.regionService
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

    this.regionService
      .getCitiesForCountry(countryName)
      .pipe(first())
      .subscribe((data) => {
        this.departureCities.length = 0;
        data.forEach((city) => {
          this.departureCities = [...this.departureCities, city];
        });
      });
  }

  onDestinationCountrySelected($event: any) {
    const countryName = $event.value.name;

    this.regionService
      .getCitiesForCountry(countryName)
      .pipe(first())
      .subscribe((data) => {
        this.destinationCities.length = 0;

        data.forEach((city) => {
          this.destinationCities = [...this.destinationCities, city];
        });
      });
  }

  onDepartureCitySelected($event: any) {
    this.departureCitySelected = true;
  }

  onDestinationCitySelected($event: any) {
    this.destinationCitySelected = true;
  }

  submit() {
    this.router.navigate(['/flights'], {
      queryParams: {
        departureCity: this.selectedDepartureCity?.name,
        destinationCity: this.selectedDestinationCity?.name,
      },
    });
  }
}
