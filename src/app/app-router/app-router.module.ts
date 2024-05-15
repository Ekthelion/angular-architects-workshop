import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home/pages/home-page/home-page.component';
import { FlightSearchComponent } from '../flight-booking/flight-search/flight-search/flight-search.component';
import { FlightEditComponent } from '../flight-booking/flight-search/flight-edit/flight-edit.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'flight-search',
    component: FlightSearchComponent,
  },
  {
    path: 'flight-search/:id/edit',
    component: FlightEditComponent,
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRouterModule {}
