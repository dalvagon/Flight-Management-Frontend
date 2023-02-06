import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDetailsComponent } from './flight-details.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FlightsRoutingModule } from '../../flights-routing.module';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { StepsModule } from 'primeng/steps';
import { ListboxModule } from 'primeng/listbox';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('FlightDetailsComponent', () => {
  let component: FlightDetailsComponent;
  let fixture: ComponentFixture<FlightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightDetailsComponent],
      imports: [
        HttpClientTestingModule,
        CommonModule,
        FlightsRoutingModule,
        ButtonModule,
        AsyncPipe,
        DialogModule,
        ReactiveFormsModule,
        DropdownModule,
        FormsModule,
        StepsModule,
        ListboxModule,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
