import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AirportService } from './airport.service';

describe('AirportService', () => {
  let service: AirportService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(AirportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
