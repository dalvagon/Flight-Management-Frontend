import { HttpClient } from '@angular/common/http';
import { Allergy } from './../schema/allergy';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllergyService {
  private API_URL = environment.API_URL;

  constructor(private _httpClient: HttpClient) {}

  getAllergies(): Observable<Allergy[]> {
    return this._httpClient.get<Allergy[]>(this.API_URL + '/allergies');
  }
}
