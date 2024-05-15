import {
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements OnInit {
  private viewRef: EmbeddedViewRef<unknown> | undefined;

  @Input('appTooltip') template: TemplateRef<unknown> | undefined;
  constructor(
    private host: ElementRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setHidden(false);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setHidden(true);
  }

  ngOnInit(): void {
    if (!this.template) {
      return;
    }
    this.viewContainerRef.clear();
    this.viewRef = this.viewContainerRef.createEmbeddedView(this.template);

    this.setHidden(true);
  }

  setHidden(hidden: boolean): void {
    if (!this.viewRef) {
      return;
    }
    this.viewRef.rootNodes.forEach((node) => {
      node.hidden = hidden;
    });
  }
}
