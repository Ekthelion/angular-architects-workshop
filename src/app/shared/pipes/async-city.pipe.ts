import { Pipe, PipeTransform } from '@angular/core';
import { AirportService } from '../services/airport.service';
import { Observable } from 'rxjs';

@Pipe({
  name: 'asyncCity',
})
export class AsyncCityPipe implements PipeTransform {
  constructor(private airportService: AirportService) {}

  transform(
    value: string,
    format: 'short' | 'long' = 'short'
  ): Observable<string> {
    switch (format) {
      case 'short': {
        return this.airportService.code(value);
        // break;
      }
      case 'long': {
        return this.airportService.full(value);
      }
    }
  }
}
