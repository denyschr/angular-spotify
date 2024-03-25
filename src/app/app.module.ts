import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumModule, ArtistModule, HomeModule, PageNotFoundModule, SearchModule } from './core/pages';
import { ApiService } from './shared/services';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    AlbumModule,
    ArtistModule,
    PageNotFoundModule,
    SearchModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
