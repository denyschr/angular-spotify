import { Component, inject } from '@angular/core';
import { CategoriesService } from '@modules/search/services/categories.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-search-categories',
  templateUrl: './search-categories.component.html',
  styleUrl: './search-categories.component.scss'
})
export class SearchCategoriesComponent {
  public readonly categories$ = inject(CategoriesService)
    .getCategories()
    .pipe(map((categoriesResponse) => categoriesResponse.categories.items));
}
