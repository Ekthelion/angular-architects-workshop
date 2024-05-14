import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AirportService {
  private readonly url = 'http://www.angular.at/api/airport/'; // code fullName

  constructor(private httpClient: HttpClient) {}

  code(name: string): Observable<string> {
    const params = { name };
    return this.httpClient.get<string>(this.url + '/code', { params });
  }

  full(name: string): Observable<string> {
    const params = { name };
    return this.httpClient.get<string>(this.url + '/fullName', {
      params,
    });
  }
}
