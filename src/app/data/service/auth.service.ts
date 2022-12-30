import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Token } from '../schema/token';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = environment.API_URL;
  private userPayload: any;

  constructor(private _httpClient: HttpClient) {
    this.userPayload = this.decodeToken();
  }

  public register(credentials: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this._httpClient.post<any>(
      this.API_URL + '/people',
      JSON.stringify(credentials),
      options
    );
  }

  public logIn(credentials: any): Observable<Token> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this._httpClient.post<Token>(
      this.API_URL + '/auth/login',
      JSON.stringify(credentials),
      options
    );
  }

  public storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token')!;
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  public logout(): void {
    localStorage.removeItem('token');
    window.location.reload();
  }

  public decodeToken() {
    const jwtHelper = new JwtHelperService();
    const token = this.getToken();

    return jwtHelper.decodeToken(token);
  }

  public getNameFromToken() {
    if (this.userPayload) {
      return this.userPayload[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
      ];
    }
  }

  public getSurnameFromToken() {
    if (this.userPayload) {
      return this.userPayload[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname'
      ];
    }
  }

  public getRoleFromToken() {
    if (this.userPayload) {
      return this.userPayload[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ];
    }
  }
}
