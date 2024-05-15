import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FlightCardComponent } from './flight-search/flight-card/flight-card.component';
import { FlightSearchComponent } from './flight-search/flight-search/flight-search.component';
import { StatusToggleComponent } from './flight-search/status-toggle/status-toggle.component';
import { FlightDateComponent } from './flight-search/flight-date/flight-date.component';
import { FlightEditComponent } from './flight-search/flight-edit/flight-edit.component';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    StatusToggleComponent,
    FlightDateComponent,
    FlightEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [FlightSearchComponent],
})
export class FlightBookingModule {}
