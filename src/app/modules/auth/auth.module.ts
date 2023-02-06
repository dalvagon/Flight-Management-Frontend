import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    DropdownModule,
    CalendarModule,
  ],
})
export class AuthModule {}
