import { Component, Input } from '@angular/core';
import { Track } from '@models';

@Component({
  selector: 'app-search-top-result',
  templateUrl: './search-top-result.component.html',
  styleUrl: './search-top-result.component.scss'
})
export class SearchTopResultComponent {
  @Input() topResult!: Track;
}
