import { Component, OnInit, inject } from '@angular/core';
import { Flight } from '../../entities/flights';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.scss',
})
export class FlightSearchComponent implements OnInit {
  from = '';
  to = '';

  ngOnInit(): void {}

  private httpClient = inject(HttpClient);
  // constructor(private httpClient: HttpClient) {}

  flights: Flight[] = [];
  selectedFlight: Flight | null = null;

  messageSuccess: string = '';
  messageError: string = '';

  search(): void {
    this.selectFlight(null);
    // console.log('search', this.from, this.to);
    const url = 'https://demo.angulararchitects.io/api/flight';
    const params = { from: this.from, to: this.to };
    const headers = { Accept: 'application/json' };
    this.httpClient.get<Flight[]>(url, { params, headers }).subscribe({
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
    console.log('save', this.selectedFlight);
    const url = 'https://demo.angulararchitects.io/api/flight';
    const body = this.selectedFlight;
    const headers = { Accept: 'application/json' };
    this.httpClient.post<Flight>(url, body, { headers }).subscribe({
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
}
