import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/flights',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'flights',
        loadChildren: () =>
          import('src\\app\\modules\\flights\\flights.module').then(
            (m) => m.FlightsModule
          ),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('src\\app\\modules\\auth\\auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
