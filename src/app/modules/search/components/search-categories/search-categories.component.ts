import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Category } from '@models';
import { CategoriesService } from '@modules/search/services/categories.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-search-categories',
  templateUrl: './search-categories.component.html',
  styleUrl: './search-categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCategoriesComponent {
  @Input({ required: true }) categories!: Category[];
}
