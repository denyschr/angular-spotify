import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MediaItemModule } from '@ui';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [SectionComponent],
  imports: [CommonModule, MediaItemModule],
  exports: [SectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SectionModule {}
