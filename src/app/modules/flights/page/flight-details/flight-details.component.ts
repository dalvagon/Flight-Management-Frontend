import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, Observable } from 'rxjs';
import { Flight } from 'src/app/data/schema/flight';
import { FlightService } from 'src/app/data/service/flight.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css'],
})
export class FlightDetailsComponent implements OnInit {
  flight?: Flight;
  seatsLeft$: Observable<number> | undefined;

  constructor(
    private flightService: FlightService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.flightService
      .getFlight(this.route.snapshot.params['id'])
      .pipe(first())
      .subscribe((data) => {
        this.flight = data;
        this.seatsLeft$ = new Observable((observer) => {
          observer.next(
            this.flight!.passengerCapacity - this.flight!.passengers.length
          );
        });
      });
  }
}
