import { UserStoreService } from './../../data/service/user-store.service';
import { AuthService } from './../../data/service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = this.authService.isLoggedIn();
  public name: string = '';
  public surname: string = '';
  public role: string = '';

  constructor(
    private authService: AuthService,
    private userStore: UserStoreService
  ) {}

  ngOnInit(): void {
    this.userStore
      .getNameFromStore()
      .subscribe(
        (val) => (this.name = val || this.authService.getNameFromToken())
      );
    this.userStore
      .getSurnameFromStore()
      .subscribe(
        (val) => (this.surname = val || this.authService.getSurnameFromToken())
      );
    this.userStore
      .getRoleFromStore()
      .subscribe(
        (val) => (this.role = val || this.authService.getRoleFromToken())
      );
  }

  logout() {
    this.authService.logout();
  }
}
