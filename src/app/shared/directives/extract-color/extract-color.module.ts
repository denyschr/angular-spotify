import { NgModule } from '@angular/core';
import { ExtractColorDirective } from './extract-color.directive';

@NgModule({
  declarations: [ExtractColorDirective],
  exports: [ExtractColorDirective]
})
export class ExtractColorModule {}
