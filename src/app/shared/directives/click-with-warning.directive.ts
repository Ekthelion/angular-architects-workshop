import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appButtonWithWarning]',
  standalone: true,
})
export class ButtonWithWarningDirective {
  @HostBinding('class') className: string = 'btn btn-danger';
}

@Directive({
  selector: 'button[appClickWithWarning]',
  hostDirectives: [ButtonWithWarningDirective],
})
export class ClickWithWarningDirective implements OnInit {
  @Input() appClickWithWarning: string = 'Are you sure?';

  @Output() confirmed = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('click', ['$event'])
  onMouseClick(event: MouseEvent) {
    const result = window.confirm(this.appClickWithWarning);
    if (!result) {
      event.preventDefault();
      event.stopImmediatePropagation();
      event.stopPropagation();
    }
    this.confirmed.emit(result);
  }

  ngOnInit(): void {}
}
