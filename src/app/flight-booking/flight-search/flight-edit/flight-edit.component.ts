import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { Flight } from '../../../entities/flights';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CityValidators } from '../../../shared/validators/city.validators';
import { AbstractFlightService } from '../flight.service';

interface EditFlightForm {
  id: FormControl<number>;
  from: FormControl<string>;
  to: FormControl<string>;
  date: FormControl<string>;
  delayed: FormControl<boolean>;
}

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrl: './flight-edit.component.scss',
})
export class FlightEditComponent implements OnInit {
  private flightService = inject(AbstractFlightService);

  @Input({ required: true }) flight!: Flight;

  @Output() save = new EventEmitter<Flight>();
  @Output() cancel = new EventEmitter<void>();


  form = new FormGroup<EditFlightForm>({
    id: new FormControl(
      { value: this.flight?.id, disabled: true },
      { nonNullable: true }
    ),
    from: new FormControl(this.flight?.from, {
      nonNullable: true,
      asyncValidators: [CityValidators.asyncValidateCity(this.flightService)],
    }),
    to: new FormControl(this.flight?.to, {
      nonNullable: true,
      asyncValidators: [CityValidators.asyncValidateCity(this.flightService)],
    }),
    date: new FormControl(this.flight?.date, { nonNullable: true }),
    delayed: new FormControl(this.flight?.delayed, { nonNullable: true }),
  });

  ngOnInit(): void {
    this.form.patchValue(this.flight);
  }

  cancelEdit(): void {
    this.cancel.emit();
  }

  saveEdit(): void {
    if (this.form.invalid) {
      return;
    }

    this.save.emit(this.form.getRawValue());
  }
}
