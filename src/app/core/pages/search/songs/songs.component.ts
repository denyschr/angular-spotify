import { Component, Input } from '@angular/core';
import { SearchResponse } from '../../../models';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss', '../../../../shared/ui/section/section.component.scss']
})
export class SongsComponent {
  @Input() search!: SearchResponse;
}
