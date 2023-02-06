import { PassengerService } from './../../../../data/service/passenger.service';
import { AllergyService } from './../../../../data/service/allergy.service';
import { Allergy } from './../../../../data/schema/allergy';
import { FormBuilder, Validators } from '@angular/forms';
import { FlightService } from 'src/app/data/service/flight.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Flight } from 'src/app/data/schema/flight';
import { first } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BookFlightComponent implements OnInit {
  personId?: string;
  flightId?: string;
  flight?: Flight;
  isLoading: boolean = false;
  form = this.fb.group({
    weight: ['', [Validators.required]],
    selectedAllergies: [''],
    baggageWeight: ['', [Validators.required]],
    baggageWidth: ['', [Validators.required]],
    baggageHeight: ['', [Validators.required]],
    baggageLength: ['', [Validators.required]],
  });
  allergies: Allergy[] = [];
  baggages: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private allergyService: AllergyService,
    private passengerService: PassengerService,
    private fb: FormBuilder,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.personId = params['personId'];
      this.flightId = params['flightId'];
    });

    if (this.personId && this.flightId) {
      this.flightService
        .getFlight(this.flightId)
        .pipe(first())
        .subscribe((data) => {
          this.flight = data;
        });
    }

    this.allergyService
      .getAllergies()
      .pipe(first())
      .subscribe((data) =>
        data.forEach(
          (allergy) => (this.allergies = [...this.allergies, allergy])
        )
      );
  }

  addBaggage() {
    let baggageWeight = this.form.get('baggageWeight')?.value;
    let baggageWidth = this.form.get('baggageWidth')?.value;
    let baggageHeight = this.form.get('baggageHeight')?.value;
    let baggageLength = this.form.get('baggageLength')?.value;
    if (baggageWeight && baggageHeight && baggageLength && baggageWidth) {
      this.baggages.push({
        weight: baggageWeight,
        width: baggageWidth,
        height: baggageHeight,
        length: baggageLength,
      });
    }
  }

  submit() {
    this.isLoading = true;
    const passengerWeight = this.form.get('weight')?.value;
    const passengerAllergies: Allergy[] = JSON.parse(
      JSON.stringify(this.form.get('selectedAllergies')?.value)
    );
    const allergyIds = passengerAllergies.map((allergy) => allergy.id);

    if (passengerWeight) {
      const passenger: any = {
        personId: this.personId,
        flightId: this.flightId,
        weight: passengerWeight,
        baggages: this.baggages,
        allergyIds: allergyIds,
      };

      this.passengerService
        .createPassenger(passenger)
        .pipe(first())
        .subscribe((res) => {
          this.isLoading = false;
          this.location.back();
        });
    }
  }
}
