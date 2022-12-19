import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { Country } from '../schema/country';

import { RegionService } from './region.service';

describe('RegionService', () => {
  let service: RegionService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(RegionService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return countries when get countries ', () => {
    const mockCountries: Country[] = [
      { id: '21', name: 'Romania', code: 'Ro' },
      { id: '12', name: 'Serbia', code: 'Rs' },
    ];

    httpClient
      .get<Country[]>(environment.API_URL + '/countries')
      .subscribe((countries) => {
        expect(countries.length).toBe(2);
        expect(countries).toEqual(mockCountries);
      });

    const req = httpMock.expectOne(`${environment.API_URL}/countries`);
    expect(req.request.method).toBe('GET');

    req.flush(mockCountries);
  });

  it('should use GET to get countries ', () => {
    httpClient.get<Country[]>(environment.API_URL + '/countries').subscribe();
    const req = httpMock.expectOne(`${environment.API_URL}/countries`);
    expect(req.request.method).toBe('GET');
  });
});
