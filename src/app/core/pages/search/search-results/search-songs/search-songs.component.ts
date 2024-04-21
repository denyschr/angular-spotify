import { Component, Input } from '@angular/core';
import { Track } from '../../../../models';

@Component({
  selector: 'app-search-songs',
  templateUrl: './search-songs.component.html',
  styleUrl: './search-songs.component.scss'
})
export class SearchSongsComponent {
  @Input() songs!: Track[];
}
