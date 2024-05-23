import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-section',
  templateUrl: './skeleton-section.component.html',
  styleUrl: './skeleton-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonSectionComponent {}
