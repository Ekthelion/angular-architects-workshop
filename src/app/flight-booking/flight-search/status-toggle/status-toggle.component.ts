import {
  Component,
  EventEmitter,
  Input,
  Output,
  booleanAttribute,
} from '@angular/core';

@Component({
  selector: 'app-status-toggle',
  templateUrl: './status-toggle.component.html',
  styleUrl: './status-toggle.component.scss',
})
export class StatusToggleComponent {
  @Input({ transform: booleanAttribute }) status: boolean = false;
  @Output() statusChange = new EventEmitter<boolean>();

  toggleStatus(): void {
    this.status = !this.status;
    this.statusChange.emit(this.status);
  }
}
