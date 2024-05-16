import { Inject, Injectable } from '@angular/core';
import { AbstractFlightService } from './flight.service';
import { Flight } from '../../entities/flights';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BASE_URL } from '../../config/base-url.token';

interface FlightState {
  flights: Record<number, Flight>;
  loading: boolean;
  error: string;
  message: string;
}

@Injectable()
export class DefaultFlightService implements AbstractFlightService {
  private state = new BehaviorSubject<FlightState>({
    flights: {},
    loading: false,
    error: '',
    message: '',
  });

  private updateState(newState: Partial<FlightState>): void {
    this.state.next({ ...this.state.value, ...newState });
  }

  readonly flightsMap$ = this.state.pipe(map((state) => state.flights));
  readonly flights$ = this.state.pipe(
    map((state) => Object.values(state.flights))
  );
  readonly loading$ = this.state.pipe(map((state) => state.loading));
  readonly error$ = this.state.pipe(map((state) => state.error));
  readonly message$ = this.state.pipe(map((state) => state.message));

  constructor(
    private httpClient: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) {}

  search(from: string, to: string): void {
    const headers = { Accept: 'application/json' };

    this.updateState({ error: '', message: '', loading: true });
    this.httpClient
      .get<Flight[]>(this.baseUrl, { params: { from, to }, headers })
      .pipe(
        map((flights) =>
          flights.reduce<Record<number, Flight>>((flightsMap, flight) => {
            flightsMap[flight.id] = flight;
            return flightsMap;
          }, {})
        )
      )
      .subscribe({
        next: (flightsMap) => {
          this.updateState({ flights: flightsMap, loading: false });
        },
        error: (error) => {
          this.updateState({ error: error.message, loading: false });
        },
      });
  }

  save(body: Flight): void {
    const headers = { Accept: 'application/json' };

    this.updateState({ error: '', message: '', loading: true });
    this.httpClient.post<Flight>(this.baseUrl, body, { headers }).subscribe({
      next: (flight) => {
        const flights = { ...this.state.value.flights, [flight.id]: flight };
        this.updateState({
          loading: false,
          message: 'Flight saved successfully',
          flights,
        });
      },
      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          this.updateState({ error: error.error.message, loading: false });
        }
        this.updateState({ loading: false });
      },
    });
  }

  flightById(id: number): void {
    this.updateState({ error: '', loading: true });
    this.httpClient.get<Flight>(this.baseUrl + '/' + id).subscribe({
      next: (flight) => {
        const flights = { ...this.state.value.flights, [flight.id]: flight };
        this.updateState({ loading: false, flights });
      },
      error: (error) => {
        this.updateState({ error: error.message, loading: false });
      },
    });
  }
}
