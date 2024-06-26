import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[opacityScroll]'
})
export class OpacityScrollDirective {
  constructor(private _el: ElementRef<HTMLDivElement>) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollOffset = window.scrollY;
    if (scrollOffset > 10) {
      this._el.nativeElement.style.setProperty('--top-bar-opacity', '1');
    } else {
      this._el.nativeElement.style.setProperty('--top-bar-opacity', '0');
    }
  }
}
