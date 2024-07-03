import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';

@Directive({
  selector: '[intersectionListener]'
})
export class IntersectionListenerDirective implements OnInit, AfterViewInit, OnDestroy {
  @Output() intersectionListener = new EventEmitter<boolean>();
  private _observer!: IntersectionObserver;

  constructor(private _elementRef: ElementRef) {}

  ngOnInit(): void {
    this.onIntersection();
  }

  ngAfterViewInit(): void {
    this._observer.observe(this._elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this._observer) this._observer.disconnect();
  }

  private onIntersection(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1
    };

    this._observer = new IntersectionObserver(entries => {
      this.checkForIntersection(entries);
    }, options);
  }

  private checkForIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      const isIntersecting =
        entry.isIntersecting && entry.target === this._elementRef.nativeElement;

      if (isIntersecting) {
        this.intersectionListener.emit(true);
        this._observer.unobserve(entry.target);
      }
    });
  }
}
