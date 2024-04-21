import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CategoriesService } from '../../../services';
import { map } from 'rxjs';

@Component({
  selector: 'app-search-categories',
  templateUrl: './search-categories.component.html',
  styleUrl: './search-categories.component.scss',
  providers: [CategoriesService]
})
export class SearchCategoriesComponent {
  public readonly categories$ = inject(CategoriesService)
    .getCategories()
    .pipe(map((categoriesResponse) => categoriesResponse.categories.items));
}
