import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AlbumModule, ArtistModule, HomeModule, NotFoundModule, SearchModule } from './pages';
import { CoreComponent } from './core.component';
import { HeaderModule, SidebarModule, FooterModule } from '../shared/components';
import { AppRoutingModule } from '../app-routing.module';
import { ApiService, SearchService } from './services';
@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    SidebarModule,
    FooterModule,
    HomeModule,
    SearchModule,
    NotFoundModule,
    AlbumModule,
    ArtistModule
  ],
  providers: [ApiService, SearchService]
})
export class CoreModule {}
