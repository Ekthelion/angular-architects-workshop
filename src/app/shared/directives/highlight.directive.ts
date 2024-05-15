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

  @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent) {}

  @HostListener('mouseleave', ['$event']) onMouseLeave(event: MouseEvent) {}

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.backgroundColor = this.appHighlight || this.appDefaultColor;
  }
}
