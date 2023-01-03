import { AuthService } from 'src/app/data/service/auth.service';
import { UserStoreService } from 'src/app/data/service/user-store.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Flight } from 'src/app/data/schema/flight';
import { FlightService } from 'src/app/data/service/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FlightsComponent implements OnInit {
  flights: Flight[] = [];
  departureCity?: string;
  destinationCity?: string;
  departureDate?: Date;
  role?: string;
  userId?: string;

  constructor(
    private flightService: FlightService,
    private userStore: UserStoreService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userStore
      .getRoleFromStore()
      .subscribe(
        (val) => (this.role = val || this.authService.getRoleFromToken())
      );

    this.userStore
      .getIdFromStore()
      .subscribe(
        (val) => (this.userId = val || this.authService.getIdFromToken())
      );

    this.route.queryParams.subscribe((params) => {
      this.departureCity = params['departureCity'];
      this.destinationCity = params['destinationCity'];
      this.departureDate = params['departureDate'];
    });

    if (this.departureCity && this.destinationCity && this.departureDate) {
      this.flightService
        .getFlights(
          this.departureCity,
          this.destinationCity,
          this.departureDate
        )
        .pipe(first())
        .subscribe((data) =>
          data.forEach((flight) => {
            this.flights = [...this.flights, flight];
          })
        );
    }
  }

  public book(flightId: string) {
    this.router.navigate(['/book-flight'], {
      queryParams: {
        personId: this.userId,
        flightId: flightId,
      },
    });
  }
}
