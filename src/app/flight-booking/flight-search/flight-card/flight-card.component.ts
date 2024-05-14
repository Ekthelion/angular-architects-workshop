import {
  Component,
  EventEmitter,
  Input,
  Output,
  booleanAttribute,
} from '@angular/core';
import { Flight } from '../../../entities/flights';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.scss',
})
export class FlightCardComponent {
  @Input({ alias: 'flight', required: true }) flight!: Flight;
  @Input({
    transform: booleanAttribute,
  })
  selected: boolean = false;

  @Output() selectedChange = new EventEmitter<boolean>();

  toggleSelect(): void {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
