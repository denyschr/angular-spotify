import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Category } from '@models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent {
  @Input() category!: Category;
}
