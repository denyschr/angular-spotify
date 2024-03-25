import { Component, inject } from '@angular/core';
import { NewReleasesService } from '../../services';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [NewReleasesService]
})
export class HomeComponent {
  private readonly newReleases$ = inject(NewReleasesService)
    .getNewReleases()
    .pipe(map((data) => data.albums.items));

  public obsList = [this.newReleases$];

  public readonly vm$ = forkJoin(this.obsList).pipe(map(([newReleases]) => ({ newReleases })));
}
