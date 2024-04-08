import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSectionComponent } from './base-section.component';
import { BaseCardModule } from '../card/base-card.module';
import { ShowMoreModule } from '../../directives';
import { TopResultSectionComponent } from './top-result-section/top-result-section.component';
import { SongSectionComponent } from './song-section/song-section.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { CategoryModule } from '../category/category.module';

@NgModule({
  declarations: [BaseSectionComponent, TopResultSectionComponent, SongSectionComponent, CategorySectionComponent],
  imports: [CommonModule, BaseCardModule, CategoryModule, ShowMoreModule],
  exports: [BaseSectionComponent, CategorySectionComponent, TopResultSectionComponent, SongSectionComponent]
})
export class BaseSectionModule {}
