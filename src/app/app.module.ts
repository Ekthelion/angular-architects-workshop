import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search/flight-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  CommonModule,
  DATE_PIPE_DEFAULT_OPTIONS,
  DatePipeConfig,
} from '@angular/common';
import { BASE_URL } from './config/base-url.token';
import { CityPipe } from './shared/pipes/city.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, CommonModule],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FlightSearchComponent,
    CityPipe,
  ],
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
