import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'as-standard-page-layout',
  templateUrl: './standard-page-layout.component.html',
  styleUrl: './standard-page-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandardPageLayoutComponent {}
