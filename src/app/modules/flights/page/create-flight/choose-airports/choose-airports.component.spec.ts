import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAirportsComponent } from './choose-airports.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { StepsModule } from 'primeng/steps';
import { ListboxModule } from 'primeng/listbox';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ChooseAirportsComponent', () => {
  let component: ChooseAirportsComponent;
  let fixture: ComponentFixture<ChooseAirportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseAirportsComponent],
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

    fixture = TestBed.createComponent(ChooseAirportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
