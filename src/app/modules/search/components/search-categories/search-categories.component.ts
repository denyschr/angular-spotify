import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Category } from '@models';

@Component({
  selector: 'app-search-categories',
  templateUrl: './search-categories.component.html',
  styleUrl: './search-categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCategoriesComponent {
  @Input({ required: true }) categories!: Category[];
}
