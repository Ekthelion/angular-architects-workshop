import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { AbstractFlightService } from '../flight.service';
import { Flight } from '../../../entities/flights';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.scss',
})
export class FlightSearchComponent {
  @ViewChild('form', { static: true }) form!: NgForm;

  from = '';
  to = '';

  private flightService = inject(AbstractFlightService);

  flights: Flight[] = [];
  selectedFlight: Flight | null = null;
  basket: Record<number, boolean> = {};

  messageSuccess: string = '';
  messageError: string = '';

  search(): void {
    this.selectFlight(null);
    const { from, to } = this.form.value as { from: string; to: string };

    this.flightService.search({ from, to }).subscribe({
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

  editFlight(flight: Flight): void {
    this.selectFlight(flight);
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
      },
      error: (err) => {
        this.messageError = 'Error saving flight';
        this.messageSuccess = '';
        console.error('err', err);
      },
      complete: () => {
        // console.log('complete');
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
