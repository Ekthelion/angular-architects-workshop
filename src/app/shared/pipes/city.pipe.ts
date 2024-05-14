import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
})
export class CityPipe implements PipeTransform {
  transform(value: string, format: 'short' | 'long' = 'short'): string {
    switch (value) {
      case 'Wien':
        return format === 'short' ? 'VIE' : 'Vienna International Airport';
      case 'Graz':
        return format === 'short' ? 'GRZ' : 'Graz Airport';
      case 'Hamburg':
        return format === 'short' ? 'HAM' : 'Hamburg Airport';
      case 'Leoben':
        return format === 'short' ? 'LEO' : 'Leoben Airport';
      case 'London':
        return format === 'short' ? 'LHR' : 'London Heathrow Airport';
      case 'Paris':
        return format === 'short' ? 'CDG' : 'Paris Charles de Gaulle Airport';
      default:
        return value;
    }
  }
}
