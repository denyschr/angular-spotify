import { NgForOf } from '@angular/common';
import { Directive, Input, NgIterable, inject } from '@angular/core';

@Directive({
  selector: '[ngForTrackById]'
})
export class NgForTrackByIdDirective<T extends { id: string | number }> {
  @Input() ngForOf!: NgIterable<T>;

  private ngFor = inject(NgForOf<T>, { self: true });

  constructor() {
    this.ngFor.ngForTrackBy = (index: number, item: T) => item.id;
  }
}
