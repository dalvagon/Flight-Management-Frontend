import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../schema/city';
import { Country } from '../schema/country';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  private API_URL = environment.API_URL;

  constructor(private _httpClient: HttpClient) {}

  public getCountries(): Observable<Country[]> {
    return this._httpClient.get<Country[]>(this.API_URL + '/countries');
  }

  public getCitiesForCountry(countryName: string): Observable<City[]> {
    return this._httpClient.get<City[]>(this.API_URL + '/cities', {
      params: {
        countryName: countryName,
      },
    });
  }
}
