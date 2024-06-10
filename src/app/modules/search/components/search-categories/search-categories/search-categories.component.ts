import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CategoriesService } from '@modules/search/services/categories.service';

@Component({
  selector: 'app-search-categories',
  templateUrl: './search-categories.component.html',
  styleUrl: './search-categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCategoriesComponent {
  public readonly categories$ = inject(CategoriesService).getCategories();
}
