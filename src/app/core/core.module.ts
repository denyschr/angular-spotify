import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../shared/services';
import { HttpClientModule } from '@angular/common/http';
import { AlbumModule, ArtistModule, HomeModule, PageNotFoundModule, SearchModule } from './pages';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, HomeModule, SearchModule, PageNotFoundModule, AlbumModule, ArtistModule],
  providers: [ApiService]
})
export class CoreModule {}
