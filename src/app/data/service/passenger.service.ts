import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  private API_URL = environment.API_URL;

  constructor(private _httpClient: HttpClient) {}

  createPassenger(passenger: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this._httpClient.post(
      this.API_URL + '/passengers',
      JSON.stringify(passenger),
      options
    );
  }
}
