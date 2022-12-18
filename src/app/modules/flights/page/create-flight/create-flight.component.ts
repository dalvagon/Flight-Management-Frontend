import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateFlightComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'Choose cities', routerLink: 'choose-cities' },
      {
        label: 'Choose Airports',
        routerLink: 'choose-airports',
      },
      {
        label: 'Add flight details',
        routerLink: 'add-flight-details',
      },
    ];
  }
}
