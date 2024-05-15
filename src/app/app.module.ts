import { BrowserModule } from '@angular/platform-browser';
import { DATE_PIPE_DEFAULT_OPTIONS, DatePipeConfig } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BASE_URL } from './config/base-url.token';
import { CoreModule } from './core/core.module';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { AppRouterModule } from './app-router/app-router.module';
import { HomePageComponent } from './home/pages/home-page/home-page.component';

@NgModule({
  imports: [BrowserModule, CoreModule, FlightBookingModule, AppRouterModule],
  declarations: [AppComponent, HomePageComponent],
  providers: [
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { dateFormat: 'dd.MM.yyyy' } satisfies DatePipeConfig,
    },
    {
      provide: BASE_URL,
      useValue: 'https://demo.angulararchitects.io/api/flight',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
