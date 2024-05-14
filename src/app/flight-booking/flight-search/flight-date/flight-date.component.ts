import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flight-date',
  templateUrl: './flight-date.component.html',
  styleUrl: './flight-date.component.scss',
})
export class FlightDateComponent {
  @Input({ required: true }) date!: string;
}
