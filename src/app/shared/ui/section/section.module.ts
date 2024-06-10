import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SectionComponent } from './section/section.component';
import { CardModule } from '@ui';

@NgModule({
  declarations: [SectionComponent],
  imports: [CommonModule, CardModule],
  exports: [SectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SectionModule {}
