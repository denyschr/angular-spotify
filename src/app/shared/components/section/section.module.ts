import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SectionComponent } from './section.component';
import { BaseCardModule } from '../card/base-card.module';

@NgModule({
  declarations: [SectionComponent],
  imports: [CommonModule, BaseCardModule],
  exports: [SectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SectionModule {}
