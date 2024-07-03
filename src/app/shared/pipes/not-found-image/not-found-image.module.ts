import { NgModule } from '@angular/core';
import { NotFoundImagePipe } from './not-found-image.pipe';

@NgModule({
  declarations: [NotFoundImagePipe],
  exports: [NotFoundImagePipe]
})
export class NotFoundImageModule {}
