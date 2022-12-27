import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  private name$ = new BehaviorSubject<string>('');
  private surname$ = new BehaviorSubject<string>('');
  private role$ = new BehaviorSubject<string>('');

  constructor() {}

  public getRoleFromStore() {
    return this.role$.asObservable();
  }

  public setRoleForStore(role: string) {
    this.role$.next(role);
  }

  public getNameFromStore() {
    return this.name$.asObservable();
  }

  public setNameForStore(name: string) {
    this.name$.next(name);
  }

  public getSurnameFromStore() {
    return this.surname$.asObservable();
  }

  public setSurnameForStore(surname: string) {
    this.surname$.next(surname);
  }
}
