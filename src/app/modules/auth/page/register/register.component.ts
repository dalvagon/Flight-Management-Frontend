import { AuthService } from 'src/app/data/service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RegionService } from 'src/app/data/service/region.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Country } from 'src/app/data/schema/country';
import { City } from 'src/app/data/schema/city';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {
  isLoading: boolean = false;
  countries: Country[] = [];
  cities: City[] = [];
  genders: string[] = [];
  form = this.fb.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    number: ['', [Validators.required]],
    street: ['', [Validators.required]],
    city: ['', [Validators.required]],
    country: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private regionService: RegionService,
    private authService: AuthService,
    private router: Router
  ) {
    this.genders = ['Male', 'Female'];
  }

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

  submit(): void {
    this.isLoading = true;
    const name = this.form.get('name')?.value;
    const surname = this.form.get('surname')?.value;
    const dateOfBirth = this.form.get('dateOfBirth')?.value;
    const gender = this.form.get('gender')?.value;
    const number = this.form.get('number')?.value;
    const street = this.form.get('street')?.value;
    const country: Country = JSON.parse(
      JSON.stringify(this.form.get('country')?.value)
    );
    const city: City = JSON.parse(JSON.stringify(this.form.get('city')?.value));
    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;

    if (
      name &&
      surname &&
      dateOfBirth &&
      gender &&
      street &&
      number &&
      street &&
      city &&
      country &&
      email &&
      password
    ) {
      const credentials = {
        name: name,
        surname: surname,
        dateOfBirth: new Date(dateOfBirth!).toLocaleString(),
        gender: gender,
        number: number,
        street: street,
        cityId: city.id,
        country: country.id,
        email: email,
        password: password,
      };

      this.authService
        .register(credentials)
        .pipe(first())
        .subscribe((res) => console.log(res));
    }
  }
}
