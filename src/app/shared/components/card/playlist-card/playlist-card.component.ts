import { Component } from '@angular/core';
import { BaseCardComponent } from '../base-card.component';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['../base-card.component.scss', './playlist-card.component.scss']
})
export class PlaylistCardComponent extends BaseCardComponent {}
