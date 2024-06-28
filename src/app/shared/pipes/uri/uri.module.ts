import { NgModule } from '@angular/core';
import { UriPipe } from './uri.pipe';

@NgModule({
  declarations: [UriPipe],
  exports: [UriPipe]
})
export class UriModule {}
