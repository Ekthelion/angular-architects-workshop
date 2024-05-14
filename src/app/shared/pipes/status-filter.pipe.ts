import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from '../../entities/flights';

@Pipe({
  name: 'statusFilter',
})
export class StatusFilterPipe implements PipeTransform {
  transform(value: Flight[] = [], delayed: boolean): Flight[] {
    return value.filter((flight) => flight.delayed === delayed);
  }
}
