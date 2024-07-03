import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'as-no-results',
  templateUrl: './no-results.component.html',
  styleUrl: './no-results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoResultsComponent {
  @Input({ required: true }) query!: string;
}
