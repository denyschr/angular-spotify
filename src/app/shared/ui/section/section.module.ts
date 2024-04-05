import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { BaseCardModule } from '../card/base-card.module';
import { ShowMoreModule } from '../../directives';

@NgModule({
  declarations: [SectionComponent],
  imports: [CommonModule, BaseCardModule, ShowMoreModule],
  exports: [SectionComponent]
})
export class SectionModule {}
