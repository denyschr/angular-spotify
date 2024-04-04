import { Component, inject } from '@angular/core';
import { NewReleasesService } from '../../services';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  providers: [NewReleasesService]
})
export class HomePage {
  private readonly newReleases$ = inject(NewReleasesService)
    .getNewReleases()
    .pipe(map((data) => data.albums.items));

  public obsList = [this.newReleases$];

  public readonly vm$ = forkJoin(this.obsList).pipe(map(([newReleases]) => ({ newReleases })));
}
