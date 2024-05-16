import { Injectable } from '@angular/core';
import { AbstractFlightService } from './flight.service';
import { Observable, of } from 'rxjs';
import { Flight } from '../../entities/flights';

@Injectable()
export class DummyFlightService implements AbstractFlightService {
  constructor() {}

  search(params: { from: string; to: string }): Observable<Flight[]> {
    return of([
      {
        id: 1,
        from: 'Wien',
        to: 'Leoben',
        date: '25.04.2024',
        delayed: false,
      },
      {
        id: 2,
        from: 'London',
        to: 'Paris',
        date: '26.04.2024',
        delayed: true,
      },
      {
        id: 3,
        from: 'Graz',
        to: 'Hamburg',
        date: '27.04.2024',
        delayed: false,
      },
    ]);
  }

  save(flight: Flight): Observable<Flight> {
    return of(flight);
  }

  flightById(id: number): Observable<Flight> {
    return of({
      id: 1,
      from: 'Wien',
      to: 'Leoben',
      date: '25.04.2024',
      delayed: false,
    });
  }
}
