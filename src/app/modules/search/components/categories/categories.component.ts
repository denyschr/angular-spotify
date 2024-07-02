import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoriesService } from '@modules/search/services/categories.service';
import { catchError, ignoreElements, of } from 'rxjs';

@Component({
  selector: 'as-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CategoriesService]
})
export class CategoriesComponent {
  public readonly categories$ = this._categoriesService.getCategories();
  public readonly categoryError$ = this.categories$.pipe(
    ignoreElements(),
    catchError(() => of('Could not fetch categories'))
  );

  constructor(private _categoriesService: CategoriesService) {}
}
