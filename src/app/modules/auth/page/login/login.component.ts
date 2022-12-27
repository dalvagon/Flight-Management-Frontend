import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { first } from 'rxjs';
import { UserStoreService } from 'src/app/data/service/user-store.service';
import { AuthService } from 'src/app/data/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  form = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private authService: AuthService,
    private userStoreService: UserStoreService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {}

  submit(): void {
    this.isLoading = true;
    const email = this.form.get(['email'])?.value;
    const password = this.form.get(['password'])?.value;

    if (email && password) {
      const credentials = {
        email: email,
        password: password,
      };
      this.authService
        .logIn(credentials)
        .pipe(first())
        .subscribe((res) => {
          this.isLoading = false;
          this.authService.storeToken(res.token);
          let payload = this.authService.decodeToken();
          this.userStoreService.setNameForStore(
            payload[
              'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
            ]
          );
          this.userStoreService.setSurnameForStore(
            payload[
              'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname'
            ]
          );
          this.userStoreService.setRoleForStore(
            payload[
              'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
            ]
          );
          this.router.navigate(['']);
        });
    }
  }
}
