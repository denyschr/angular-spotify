import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'sp-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) routerUrl!: string;
  @Input({ required: true }) imageUrl?: string;
  @Input() roundedImage = false;
}
