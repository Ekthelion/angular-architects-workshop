import { Inject, Injectable } from '@angular/core';
import { AbstractFlightService } from './flight.service';
import { Flight } from '../entities/flights';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../config/base-url.token';

@Injectable()
export class DefaultFlightService implements AbstractFlightService {
  constructor(
    private httpClient: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) {}

  search(params: { from: string; to: string }): Observable<Flight[]> {
    const headers = { Accept: 'application/json' };
    return this.httpClient.get<Flight[]>(this.baseUrl, { params, headers });
  }

  save(body: Flight): Observable<Flight> {
    const headers = { Accept: 'application/json' };
    return this.httpClient.post<Flight>(this.baseUrl, body, { headers });
  }
}
