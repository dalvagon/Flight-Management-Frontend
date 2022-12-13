import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flight } from '../schema/flight';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private API_URL = environment.API_URL;

  constructor(private _httpClient: HttpClient) {}

  getFlights(
    departureCity: string,
    deestinationCity: string
  ): Observable<Flight[]> {
    return this._httpClient.get<Flight[]>(this.API_URL + '/flights', {
      params: {
        departureCity: departureCity,
        destinationCity: deestinationCity,
      },
    });
  }

  getFlight(id: string): Observable<Flight> {
    return this._httpClient.get<Flight>(this.API_URL + `/flights/${id}`);
  }
}
