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
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight?: string;
  @Input() appDefaultColor = 'yellow';

  @Output() appHighlightChange = new EventEmitter<string>();

  @HostBinding('style.backgroundColor') backgroundColor: string | null = null;

  @HostListener('mouseenter', ['$event']) onMouseEnter() {}

  @HostListener('mouseleave', ['$event']) onMouseLeave() {}

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.backgroundColor = this.appHighlight || this.appDefaultColor;
  }
}
