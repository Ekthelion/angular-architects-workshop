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
  private flightService = inject(AbstractFlightService);

  form = new FormGroup<SearchForm>({
    from: new FormControl('London', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        // CityValidators.validateCity,
      ],
      asyncValidators: [CityValidators.asyncValidateCity(this.flightService)],
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
      asyncValidators: [],
      nonNullable: true,
    }),
    withValidators: new FormControl(true, { nonNullable: true }),
  });

  flights: Flight[] = [];
  selectedFlight: Flight | null = null;
  basket: Record<number, boolean> = {};

  messageSuccess: string = '';
  messageError: string = '';

  search(): void {
    this.selectFlight(null);
    const { from, to } = this.form.getRawValue();

    this.flightService.search({ from, to }).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (err) => {
        console.error('err', err);
      },
      complete: () => {
        // console.log('complete');
      },
    });
  }

  selectFlight(flight: Flight | null): void {
    this.selectedFlight = flight;
    this.clearMessages();
  }

  editFlight(flight: Flight): void {
    this.selectFlight(flight);
  }

  clearMessages(): void {
    this.messageSuccess = '';
    this.messageError = '';
  }

  save(): void {
    const body = this.selectedFlight;
    if (!body) {
      return;
    }

    this.flightService.save(body).subscribe({
      next: (flight) => {
        this.messageSuccess = 'Flight saved successfully';
        this.messageError = '';
      },
      error: (err) => {
        this.messageError = 'Error saving flight';
        this.messageSuccess = '';
        console.error('err', err);
      },
      complete: () => {
        // console.log('complete');
      },
    });
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

  cancel(): void {
    this.selectFlight(null);
  }
}
