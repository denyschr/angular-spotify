import { Component, Input } from '@angular/core';
import { Category } from '../../../models';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss', '../../../../shared/ui/section/section.component.scss']
})
export class CategoriesComponent {
  @Input() categories!: Category[];
}
