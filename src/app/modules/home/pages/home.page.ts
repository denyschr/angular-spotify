import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { NewReleasesService } from '../services/new-releases.service';

@Component({
  selector: 'sp-home',
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NewReleasesService]
})
export class HomePage {
  private readonly _newReleases$ = inject(NewReleasesService).getNewReleases();
  public obsList = [this._newReleases$];
  public readonly vm$ = forkJoin(this.obsList).pipe(map(([newReleases]) => ({ newReleases })));
}
