import { Component } from '@angular/core';
import { BaseSectionComponent } from '../base-section.component';

@Component({
  selector: 'app-song-section',
  templateUrl: './song-section.component.html',
  styleUrls: ['../base-section.component.scss', './song-section.component.scss']
})
export class SongSectionComponent extends BaseSectionComponent {}
