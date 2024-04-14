import { Component, Input } from '@angular/core';
import { BaseSectionComponent } from '../base-section.component';
import { Category } from '../../../../core/models';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['../base-section.component.scss', './category-section.component.scss']
})
export class CategorySectionComponent extends BaseSectionComponent {
  @Input() categories!: Category[];
}
