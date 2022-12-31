import { AuthService } from './../../data/service/auth.service';
import { UserStoreService } from './../../data/service/user-store.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private userStore: UserStoreService,
    private authService: AuthService
  ) {}

  canActivate(): boolean {
    let role: string = '';

    this.userStore
      .getRoleFromStore()
      .subscribe((val) => (role = val || this.authService.getRoleFromToken()));

    if (role === 'Admin') {
      return true;
    }

    return false;
  }
}
