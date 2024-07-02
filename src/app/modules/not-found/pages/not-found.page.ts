import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'as-not-found',
  templateUrl: './not-found.page.html',
  styleUrl: './not-found.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundPage {}
