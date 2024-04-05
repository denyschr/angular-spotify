import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { INITIAL_ITEM_LENGTH, ITEM_LIMIT } from '../../../core/constants/app.constants';

@Directive({
  selector: '[showMore]'
})
export class ShowMoreDirective {
  private isShowMore = false;

  @Input() currentLength = INITIAL_ITEM_LENGTH;
  @Output() newItemLength = new EventEmitter<number>();

  @HostListener('click', ['$event'])
  showMore(e: Event) {
    const target = e.target as HTMLButtonElement;
    this.currentLength = this.isShowMore ? INITIAL_ITEM_LENGTH : ITEM_LIMIT;
    target.innerText = this.isShowMore ? 'Show more' : 'Show less';
    this.newItemLength.emit(this.currentLength);
    this.isShowMore = !this.isShowMore;
  }
}
