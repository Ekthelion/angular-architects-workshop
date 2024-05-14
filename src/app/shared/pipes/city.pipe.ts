// import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
})
export class CityPipe implements PipeTransform {
  // constructor(private httpClient: HttpClient) { } possible but not recommended

  transform(value: string, format: 'short' | 'long' = 'short'): string {
    switch (value) {
      case 'Wien':
        return format === 'short' ? 'VIE' : 'Vienna';
      case 'Graz':
        return format === 'short' ? 'GRZ' : 'Graz';
      case 'Hamburg':
        return format === 'short' ? 'HAM' : 'Hamburg';
      case 'Leoben':
        return format === 'short' ? 'LEO' : 'Leoben';
      case 'London':
        return format === 'short' ? 'LHR' : 'London';
      case 'Paris':
        return format === 'short' ? 'CDG' : 'Paris';
      default:
        return value;
    }
  }
}
