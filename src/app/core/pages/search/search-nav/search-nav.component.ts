import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrl: './search-nav.component.scss'
})
export class SearchNavComponent {
  @Input() mediaTypes!: string[];

  public currentMediaType = 'all';

  @Output() selectedMediaType = new EventEmitter<string>();

  public onSearchFilter(mediaType: string): void {
    this.currentMediaType = mediaType;
    this.selectedMediaType.emit(mediaType);
  }
}
