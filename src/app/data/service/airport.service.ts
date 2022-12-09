import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Airport } from '../schema/airport';

@Injectable({
  providedIn: 'root',
})
export class AirportService {
  private API_URL = environment.API_URL;

  constructor(private _httpClient: HttpClient) {}

  getAirports(): Observable<Airport[]> {
    return this._httpClient.get<Airport[]>(this.API_URL + '/airports');
  }

  createAirport(formData: FormData): Observable<any> {
    var airport: any = {};
    formData.forEach((value, key) => (airport[key] = value));

    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
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
