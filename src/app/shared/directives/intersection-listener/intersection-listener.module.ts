import { NgModule } from '@angular/core';
import { IntersectionListenerDirective } from './intersection-listener.directive';

@NgModule({
  declarations: [IntersectionListenerDirective],
  exports: [IntersectionListenerDirective]
})
export class IntersectionListenerModule {}
