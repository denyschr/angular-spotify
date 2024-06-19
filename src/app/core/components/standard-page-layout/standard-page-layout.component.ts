import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-standard-page-layout',
  templateUrl: './standard-page-layout.component.html',
  styleUrl: './standard-page-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandardPageLayoutComponent {}
