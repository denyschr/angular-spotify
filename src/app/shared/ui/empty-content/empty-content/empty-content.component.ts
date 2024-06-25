import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'sp-empty-content',
  templateUrl: './empty-content.component.html',
  styleUrl: './empty-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyContentComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input() routerUrl?: string;
  @Input() buttonText?: string;
}
