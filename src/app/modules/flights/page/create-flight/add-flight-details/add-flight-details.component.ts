import { Router } from '@angular/router';
import { FlightService } from 'src/app/data/service/flight.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Airport } from 'src/app/data/schema/airport';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-flight-details',
  templateUrl: './add-flight-details.component.html',
  styleUrls: ['./add-flight-details.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AddFlightDetailsComponent implements OnInit {
  departureMinDate: Date = new Date();
  arrivalMinDate?: Date;
  departureAirport?: Airport;
  destinationAirport?: Airport;
  isLoading: boolean = false;
  form = this.fb.group({
    departureDate: ['', [Validators.required]],
    arrivalDate: ['', [Validators.required]],
    passengerCapacity: ['', [Validators.required]],
    baggageWeightCapacity: ['', [Validators.required]],
    maxWeightPerBaggage: ['', [Validators.required]],
    maxBaggageWeightPerPassenger: ['', [Validators.required]],
    maxBaggageWidth: ['', [Validators.required]],
    maxBaggageHeight: ['', [Validators.required]],
    maxBaggageLength: ['', [Validators.required]],
  });

  constructor(
    private flightService: FlightService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.departureAirport = this.flightService.departureAirport;
    this.destinationAirport = this.flightService.destinationAirport;

    if (!this.departureAirport || !this.destinationAirport) {
      this.router.navigate(['/flights/create/choose-cities']);
    }
  }

  onDepartureDateSelected($event: any) {
    this.arrivalMinDate = new Date($event);
    this.form.get('arrivalDate')?.setValue(null);
  }

  submit(): void {
    this.isLoading = true;

    const departureDate = this.form.get('departureDate')!.value;
    const arrivalDate = this.form.get('arrivalDate')!.value;
    const passengerCapacity = this.form.get('passengerCapacity')!.value;
    const baggageWeightCapacity = this.form.get('baggageWeightCapacity')!.value;
    const maxWeightPerBaggage = this.form.get('maxWeightPerBaggage')!.value;
    const maxBaggageWeightPerPassenger = this.form.get(
      'maxBaggageWeightPerPassenger'
    )!.value;
    const maxBaggageWidth = this.form.get('maxBaggageWidth')!.value;
    const maxBaggageHeight = this.form.get('maxBaggageHeight')!.value;
    const maxBaggageLength = this.form.get('maxBaggageLength')!.value;

    if (
      departureDate &&
      arrivalDate &&
      passengerCapacity &&
      baggageWeightCapacity &&
      maxWeightPerBaggage &&
      maxBaggageWeightPerPassenger &&
      maxBaggageWidth &&
      maxBaggageHeight &&
      maxBaggageLength
    ) {
      const flight: any = {
        departureDate: new Date(departureDate!).toLocaleString(),
        arrivalDate: new Date(arrivalDate!).toLocaleString(),
        passengerCapacity: passengerCapacity,
        baggageWeightCapacity: baggageWeightCapacity,
        maxWeightPerBaggage: maxWeightPerBaggage,
        maxBaggageWeightPerPassenger: maxBaggageWeightPerPassenger,
        maxBaggageWidth: maxBaggageWidth,
        maxBaggageHeight: maxBaggageHeight,
        maxBaggageLength: maxBaggageLength,
        departureAirportId: this.departureAirport?.id,
        destinationAirportId: this.destinationAirport?.id,
      };

      this.flightService
        .createFlight(flight)
        .pipe(first())
        .subscribe(() => {
          this.isLoading = false;
          this.router.navigate(['/flights'], {
            queryParams: {
              departureCity: this.departureAirport?.address.city.name,
              destinationCity: this.destinationAirport?.address.city.name,
            },
          });
        });
    }
  }
}
