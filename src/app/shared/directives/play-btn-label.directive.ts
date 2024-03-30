import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Album, Artist, AlbumArtist, Audiobook, Episode, Playlist, Show } from '../../core/models';

@Directive({
  selector: '[playBtnLabel]'
})
export class PlayBtnLabelDirective implements AfterViewInit {
  @Input('playBtnLabel') data!: Album | Artist | Playlist | Show | Episode | Audiobook;

  constructor(
    private _playBtnEl: ElementRef<HTMLButtonElement>,
    private _renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    if (this.data.type === 'album') {
      const playBtnLabel = 'Play ' + this.data.name + ' by ' + this.formatArtistsNames(this.data.artists);
      this._renderer.setAttribute(this._playBtnEl.nativeElement, 'aria-label', playBtnLabel);
    } else {
      const playBtnLabel = 'Play ' + this.data.name;
      this._renderer.setAttribute(this._playBtnEl.nativeElement, 'aria-label', playBtnLabel);
    }
  }

  public formatArtistsNames(artists: AlbumArtist[]): string {
    return artists
      .reduce((arr: string[], artist) => {
        arr.push(artist.name);
        return arr;
      }, [])
      .join(', ');
  }
}
