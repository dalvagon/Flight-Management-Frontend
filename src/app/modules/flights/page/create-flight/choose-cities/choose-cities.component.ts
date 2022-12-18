import { AirportService } from 'src/app/data/service/airport.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { City } from 'src/app/data/schema/city';
import { Country } from 'src/app/data/schema/country';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { RegionService } from 'src/app/data/service/region.service';

@Component({
  selector: 'app-choose-cities',
  templateUrl: './choose-cities.component.html',
  styleUrls: ['./choose-cities.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ChooseCitiesComponent implements OnInit {
  countries: Country[] = [];
  departureCities: City[] = [];
  arrivalCities: City[] = [];
  selectedDepartureCountry?: Country;
  selectedDepartureCity?: City;
  selectedDestinationCountry?: Country;
  selectedDestinationCity?: City;
  departureCitySelected: boolean = false;
  destinationCitySelected: boolean = false;

  constructor(
    private regionService: RegionService,
    private airportService: AirportService,
    private router: Router
  ) {}

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

  onArrivalCountrySelected($event: any) {
    const countryName = $event.value.name;

    this.regionService
      .getCitiesForCountry(countryName)
      .pipe(first())
      .subscribe((data) => {
        this.arrivalCities.length = 0;

        data.forEach((city) => {
          this.arrivalCities = [...this.arrivalCities, city];
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
    if (this.selectedDepartureCity && this.selectedDestinationCity) {
      this.airportService.departureCity = this.selectedDepartureCity;
      this.airportService.destinationCity = this.selectedDestinationCity;
      this.router.navigate(['/flights/create/choose-airports']);
    }
  }
}
