import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '@services';

@Component({
  selector: 'sp-library',
  templateUrl: './library.page.html',
  styleUrl: './library.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibraryPage {
  public readonly albums$ = inject(UserService).getUserSavedAlbums();
}
