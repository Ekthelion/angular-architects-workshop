import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../../entities/flights';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';
import { BASE_URL } from '../../config/base-url.token';

@Injectable({
  providedIn: 'root',
  useFactory: (httpClient: HttpClient, baseUrl: string) => {
    // if (isDevMode()) {
    //   return new DummyFlightService();
    // }
    return new DefaultFlightService(httpClient, baseUrl);
  },
  deps: [HttpClient, BASE_URL],
})
export abstract class AbstractFlightService {
  abstract flightsMap$: Observable<Record<number, Flight>>;
  abstract flights$: Observable<Flight[]>;
  abstract loading$: Observable<boolean>;
  abstract error$: Observable<string>;
  abstract message$: Observable<string>;

  abstract search(from?: string, to?: string): void;

  abstract save(flight: Flight): void;

  abstract flightById(id: number): void;
}
