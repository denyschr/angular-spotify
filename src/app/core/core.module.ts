import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardPageLayoutComponent, LeftSidebarComponent } from '@components';
import { RouterModule } from '@angular/router';
import { OpacityScrollModule } from '@directives';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor, errorInterceptor, cacheInterceptor } from '@interceptors';

@NgModule({
  declarations: [StandardPageLayoutComponent, LeftSidebarComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, OpacityScrollModule],
  providers: [
    provideHttpClient(withInterceptors([tokenInterceptor, errorInterceptor, cacheInterceptor]))
  ]
})
export class CoreModule {}
