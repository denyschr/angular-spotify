import { Component, Input } from '@angular/core';
import { Track } from '@models';

@Component({
  selector: 'app-search-tracks',
  templateUrl: './search-tracks.component.html',
  styleUrl: './search-tracks.component.scss'
})
export class SearchTracksComponent {
  @Input() tracks!: Track[];
}
