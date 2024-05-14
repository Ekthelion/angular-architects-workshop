import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from '../../entities/flights';

@Pipe({
  name: 'statusColor',
})
export class StatusColorPipe implements PipeTransform {
  transform(value: Flight): 'text-success' | 'text-danger' {
    return value.delayed ? 'text-danger' : 'text-success';
  }
}
