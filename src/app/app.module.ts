import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { tokenInterceptor, errorInterceptor } from '@interceptors';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CoreModule],
  providers: [provideHttpClient(withInterceptors([tokenInterceptor, errorInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule {}
