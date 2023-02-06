import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsComponent } from './flights.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FlightsRoutingModule } from '../../flights-routing.module';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { StepsModule } from 'primeng/steps';
import { ListboxModule } from 'primeng/listbox';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FlightsComponent', () => {
  let component: FlightsComponent;
  let fixture: ComponentFixture<FlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightsComponent],
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

    fixture = TestBed.createComponent(FlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
