import { Component } from '@angular/core';
import { BaseCardComponent } from '../base-card.component';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['../base-card.component.scss', './song-card.component.scss']
})
export class SongCardComponent extends BaseCardComponent {}
