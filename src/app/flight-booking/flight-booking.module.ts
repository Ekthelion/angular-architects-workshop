import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FlightCardComponent } from './flight-search/flight-card/flight-card.component';
import { FlightSearchComponent } from './flight-search/flight-search/flight-search.component';
import { StatusToggleComponent } from './flight-search/status-toggle/status-toggle.component';
import { FlightDateComponent } from './flight-search/flight-date/flight-date.component';

@NgModule({
  declarations: [FlightSearchComponent, FlightCardComponent, StatusToggleComponent, FlightDateComponent],
  imports: [CommonModule, FormsModule, SharedModule, HttpClientModule],
  exports: [FlightSearchComponent],
})
export class FlightBookingModule {}
