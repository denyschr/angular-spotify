import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { DefaultLayoutComponent, FooterComponent, HeaderComponent, SidebarComponent } from './components';
import { ApiService } from '@services';
import { AlbumModule, ArtistModule, HomeModule, NotFoundModule, SearchModule } from '@modules';
import { SearchService } from '@modules/search/services/search.service';

@NgModule({
  declarations: [DefaultLayoutComponent, HeaderComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    AlbumModule,
    ArtistModule,
    HomeModule,
    NotFoundModule,
    SearchModule
  ],
  providers: [ApiService, SearchService]
})
export class CoreModule {}
