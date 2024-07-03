import { NgModule } from '@angular/core';
import { FirstLetterPipe } from './first-letter.pipe';

@NgModule({
  declarations: [FirstLetterPipe],
  exports: [FirstLetterPipe]
})
export class FirstLetterModule {}
