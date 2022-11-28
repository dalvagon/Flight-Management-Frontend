import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../schema/adress';
import { Airport } from '../schema/airport';
import { Flight } from '../schema/flight';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private API_URL = environment.API_URL;

  constructor(private _httpClient: HttpClient) {}

  getFlights(): Observable<Flight[]> {
    return this._httpClient.get<Flight[]>(this.API_URL + '/flights');
  }

  getFlight(id: string): Observable<Flight> {
    return this._httpClient.get<Flight>(this.API_URL + `/flights/${id}`);
  }

  getAirports(): Observable<Airport[]> {
    return this._httpClient.get<Airport[]>(this.API_URL + '/airports');
  }
}
