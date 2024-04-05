import { Component } from '@angular/core';
import { BaseCardComponent } from '../base-card.component';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrl: '../base-card.component.scss'
})
export class PlaylistCardComponent extends BaseCardComponent {}
