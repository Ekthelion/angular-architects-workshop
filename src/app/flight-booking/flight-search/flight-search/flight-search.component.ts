import { Component, OnInit, inject } from '@angular/core';
import { AbstractFlightService } from '../flight.service';
import { Flight } from '../../../entities/flights';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.scss',
})
export class FlightSearchComponent implements OnInit {
  from = '';
  to = '';

  ngOnInit(): void {}

  private flightService = inject(AbstractFlightService);

  flights: Flight[] = [];
  selectedFlight: Flight | null = null;
  basket: Record<number, boolean> = {};

  messageSuccess: string = '';
  messageError: string = '';

  search(): void {
    this.selectFlight(null);
    const params = { from: this.from, to: this.to };

    this.flightService.search(params).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (err) => {
        console.error('err', err);
      },
      complete: () => {
        // console.log('complete');
      },
    });
  }

  selectFlight(flight: Flight | null): void {
    this.selectedFlight = flight;
    this.clearMessages();
  }

  clearMessages(): void {
    this.messageSuccess = '';
    this.messageError = '';
  }

  save(): void {
    const body = this.selectedFlight;
    if (!body) {
      return;
    }

    this.flightService.save(body).subscribe({
      next: (flight) => {
        this.messageSuccess = 'Flight saved successfully';
        this.messageError = '';
        console.log('flight', flight);
      },
      error: (err) => {
        this.messageError = 'Error saving flight';
        this.messageSuccess = '';
        console.error('err', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  addFlight() {
    this.selectedFlight = {
      id: 0,
      from: this.from,
      to: this.to,
      date: new Date().toISOString(),
      delayed: false,
    };
  }

  cancel(): void {
    this.selectFlight(null);
  }
}
