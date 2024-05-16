import { Component, inject } from '@angular/core';
import { AbstractFlightService } from '../flight.service';
import { Flight } from '../../../entities/flights';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CityValidators } from '../../../shared/validators/city.validators';

interface SearchForm {
  from: FormControl<string>;
  to: FormControl<string>;
  withValidators: FormControl<boolean>;
}

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.scss',
})
export class FlightSearchComponent {
  protected flightService = inject(AbstractFlightService);

  form = new FormGroup<SearchForm>({
    from: new FormControl('London', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        // CityValidators.validateCity,
      ],
      // asyncValidators: [CityValidators.asyncValidateCity(this.flightService)],
      nonNullable: true,
    }),
    to: new FormControl('Wien', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        CityValidators.validateCityWithParams([
          'Graz',
          'Hamburg',
          'Wien',
          'London',
        ]),
      ],
      // asyncValidators: [CityValidators.asyncValidateCity(this.flightService)],
      nonNullable: true,
    }),
    withValidators: new FormControl(true, { nonNullable: true }),
  });

  selectedFlight: Flight | null = null;
  basket: Record<number, boolean> = {};
  editedFlight: Flight | null = null;

  search(): void {
    this.selectFlight(null);
    const { from, to } = this.form.getRawValue();

    this.flightService.search(from, to);
  }

  selectFlight(flight: Flight | null): void {
    this.selectedFlight = flight;
  }

  editFlight(flight: Flight): void {
    this.editedFlight = flight;
  }

  save(flight: Flight): void {
    if (!flight) {
      return;
    }

    this.flightService.save(flight);
  }

  addFlight() {
    this.selectFlight({
      id: 0,
      from: this.form.controls.from.value,
      to: this.form.controls.to.value,
      date: new Date().toISOString(),
      delayed: false,
    });
  }

  cancelSelect(): void {
    this.selectFlight(null);
  }

  cancelEdit(): void {
    this.editedFlight = null;
  }
}
