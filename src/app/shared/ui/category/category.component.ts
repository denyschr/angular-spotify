import { Component, Input } from '@angular/core';
import { Category } from '../../../core/models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  @Input() data!: Category;
}
