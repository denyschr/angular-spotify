import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaSummaryComponent } from './media-summary/media-summary.component';
import { NotFoundImageModule, UriModule } from '@pipes';

@NgModule({
  declarations: [MediaSummaryComponent],
  imports: [CommonModule, NotFoundImageModule, UriModule],
  exports: [MediaSummaryComponent]
})
export class MediaSummaryModule {}
