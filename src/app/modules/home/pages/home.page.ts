import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { NewReleasesService } from '../services/new-releases.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  private readonly newReleases$ = inject(NewReleasesService).getNewReleases();

  public obsList = [this.newReleases$];

  public readonly vm$ = forkJoin(this.obsList).pipe(map(([newReleases]) => ({ newReleases })));
}
