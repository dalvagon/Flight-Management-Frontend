import { City } from './../../../../data/schema/city';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingComponent } from './landing.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { StepsModule } from 'primeng/steps';
import { ListboxModule } from 'primeng/listbox';
import { RegionService } from 'src/app/data/service/region.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Country } from 'src/app/data/schema/country';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingComponent],
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
      providers: [RegionService],
    }).compileComponents();

    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call get countries once', () => {
    const mockCountries: Country[] = [
      { id: '21', name: 'Romania', code: 'Ro' },
      { id: '12', name: 'Serbia', code: 'Rs' },
    ];

    const req = httpMock.expectOne(`${environment.API_URL}/countries`);
    expect(req.request.method).toBe('GET');

    req.flush(mockCountries);
    httpMock.verify();
  });
});
