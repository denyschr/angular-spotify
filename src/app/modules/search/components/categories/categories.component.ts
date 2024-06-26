import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoriesService } from '@modules/search/services/categories.service';

@Component({
  selector: 'sp-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CategoriesService]
})
export class CategoriesComponent {
  public readonly categories$ = this._categoriesService.getCategories();

  constructor(private _categoriesService: CategoriesService) {}
}
