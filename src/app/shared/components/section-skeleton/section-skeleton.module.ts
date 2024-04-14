import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSkeletonComponent } from './section-skeleton.component';
import { CardSkeletonComponent } from './card-skeleton/card-skeleton.component';

@NgModule({
  declarations: [SectionSkeletonComponent, CardSkeletonComponent],
  imports: [CommonModule],
  exports: [SectionSkeletonComponent]
})
export class SectionSkeletonModule {}
