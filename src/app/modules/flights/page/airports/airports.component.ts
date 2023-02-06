import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { first } from 'rxjs';
import { Airport } from 'src/app/data/schema/airport';
import { AirportService } from 'src/app/data/service/airport.service';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css'],
  providers: [DialogService],
})
export class AirportsComponent implements OnInit {
  airports: Airport[] = [];
  displayCreateAirportDialog: boolean = false;

  constructor(
    private airportService: AirportService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.airportService
      .getAirports()
      .pipe(first())
      .subscribe((data) =>
        data.forEach((airport) => {
          this.airports?.push(airport);
        })
      );
  }

  showCreateAirportDialog(): void {
    this.displayCreateAirportDialog = true;
  }

  onOutput($event: any): void {
    this.displayCreateAirportDialog = $event;
  }

  deleteAirport(id: any): void {
    this.airportService
      .deleteAirport(id)
      .pipe(first())
      .subscribe(() => {
        window.location.reload();
      });
  }
}
