import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CategoriesService } from '@modules/search/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CategoriesService]
})
export class CategoriesComponent {
  public readonly categories$ = inject(CategoriesService).getCategories();
}
