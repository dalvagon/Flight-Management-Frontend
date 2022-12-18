import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Airport } from '../schema/airport';
import { City } from '../schema/city';

@Injectable({
  providedIn: 'root',
})
export class AirportService {
  private API_URL = environment.API_URL;

  departureCity?: City;
  destinationCity?: City;

  constructor(private _httpClient: HttpClient) {}

  getAirports(): Observable<Airport[]> {
    return this._httpClient.get<Airport[]>(this.API_URL + '/airports');
  }

  getAirportsByCity(cityName: string): Observable<Airport[]> {
    return this._httpClient.get<Airport[]>(this.API_URL + '/airports/byCity', {
      params: {
        cityName: cityName,
      },
    });
  }

  createAirport(airport: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    console.log(airport);
    return this._httpClient.post(
      this.API_URL + '/airports',
      JSON.stringify(airport),
      options
    );
  }

  deleteAirport(id: any): Observable<any> {
    return this._httpClient.delete(this.API_URL + '/airports/' + id);
  }
}
