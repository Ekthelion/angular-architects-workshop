import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flights';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';
import { BASE_URL } from '../config/base-url.token';

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
  abstract search(params: { from: string; to: string }): Observable<Flight[]>;

  abstract save(flight: Flight): Observable<Flight>;
}
