import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  inject
} from '@angular/core';

@Directive({
  selector: '[intersectionListener]'
})
export class IntersectionListenerDirective implements OnInit, AfterViewInit, OnDestroy {
  private readonly _el = inject(ElementRef);
  private _observer!: IntersectionObserver;
  @Output() intersectionListener = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.onIntersection();
  }

  ngAfterViewInit(): void {
    this._observer.observe(this._el.nativeElement);
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
      const isIntersecting = entry.isIntersecting && entry.target === this._el.nativeElement;

      if (isIntersecting) {
        this.intersectionListener.emit(true);
        this._observer.unobserve(entry.target);
      }
    });
  }

  ngOnDestroy(): void {
    if (this._observer) this._observer.disconnect();
  }
}
