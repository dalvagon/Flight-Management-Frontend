import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { City } from 'src/app/data/schema/city';
import { Country } from 'src/app/data/schema/country';
import { AirportService } from 'src/app/data/service/airport.service';
import { RegionService } from 'src/app/data/service/region.service';

@Component({
  selector: 'app-create-airport',
  templateUrl: './create-airport.component.html',
  styleUrls: ['./create-airport.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateAirportComponent implements OnInit {
  @Input() display: boolean = false;
  @Output() output: EventEmitter<boolean> = new EventEmitter();
  form = this.fb.group({
    name: ['', [Validators.required]],
    number: ['', [Validators.required]],
    street: ['', [Validators.required]],
    city: ['', [Validators.required]],
    country: ['', [Validators.required]],
  });

  countries: Country[] = [];
  cities: City[] = [];

  constructor(
    private airportService: AirportService,
    private regionService: RegionService,
    private fb: FormBuilder
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

  onCountrySelected($event: any) {
    const countryName = $event.value.name;

    this.regionService
      .getCitiesForCountry(countryName)
      .pipe(first())
      .subscribe((data) => {
        this.cities = [];

        data.forEach((city) => {
          this.cities = [...this.cities, city];
        });
      });
  }

  close(): void {
    this.display = false;
    this.output.emit(this.display);
  }

  submit(): void {
    const name = this.form.get('name')!.value;
    const number = this.form.get('number')!.value;
    const street = this.form.get('street')!.value;
    const country: Country = JSON.parse(
      JSON.stringify(this.form.get('country')!.value)
    );
    const city = JSON.parse(JSON.stringify(this.form.get('city')!.value));

    if (name && number && street && city && country) {
      const airport = {
        name: name,
        address: {
          number: number,
          street: street,
          cityId: city.id,
          countryId: country.id,
        },
      };

      this.airportService
        .createAirport(airport)
        .pipe(first())
        .subscribe(() => {
          window.location.reload();
        });
      this.display = false;
      this.output.emit(this.display);
    }
  }
}
