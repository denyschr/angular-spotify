import { Component } from '@angular/core';
import { BaseCardComponent } from '../base-card.component';

@Component({
  selector: 'app-top-result-card',
  templateUrl: './top-result-card.component.html',
  styleUrls: ['../base-card.component.scss', './top-result-card.component.scss']
})
export class TopResultCardComponent extends BaseCardComponent {}
