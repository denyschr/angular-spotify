import { Component } from '@angular/core';
import { BaseCardComponent } from '../base-card.component';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrl: '../base-card.component.scss'
})
export class ArtistCardComponent extends BaseCardComponent {}
