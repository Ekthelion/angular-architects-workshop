import { AbstractControl, ValidationErrors } from '@angular/forms';
import { AbstractFlightService } from '../../flight-booking/flight-search/flight.service';
import { Observable, map } from 'rxjs';

export class CityValidators {
  static validateCity(control: AbstractControl): ValidationErrors | null {
    const cities = ['Graz', 'Hamburg', 'Wien', 'London'];
    return cities.includes(control.value)
      ? null
      : {
          city: {
            currentValue: control.value,
            allowedCities: cities,
          },
        };
  }

  static validateCityWithParams(allowedCities: string[]) {
    return (control: AbstractControl): ValidationErrors | null => {
      return allowedCities.includes(control.value)
        ? null
        : {
            city: {
              currentValue: control.value,
              allowedCities,
            },
          };
    };
  }

  static asyncValidateCity(flighService: AbstractFlightService) {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return flighService
        .search({ from: control.value, to: '' })
        .pipe(
          map((flight) =>
            flight.length > 0
              ? null
              : { city: { currentValue: control.value, allowedCities: [] } }
          )
        );
    };
  }
}
