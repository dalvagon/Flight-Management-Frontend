import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAirportComponent } from './create-airport.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { StepsModule } from 'primeng/steps';
import { ListboxModule } from 'primeng/listbox';

describe('CreateAirportComponent', () => {
  let component: CreateAirportComponent;
  let fixture: ComponentFixture<CreateAirportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAirportComponent],
      imports: [
        HttpClientTestingModule,
        CommonModule,
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

    fixture = TestBed.createComponent(CreateAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
