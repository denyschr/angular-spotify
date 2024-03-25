import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[extractColor]'
})
export class ExtractColorDirective implements AfterViewInit {
  public readonly RATIO = 4;

  @Input('extractColor') categoryItemEl?: HTMLElement;

  constructor(private _categoryImgEl: ElementRef<HTMLImageElement>) {}

  ngAfterViewInit(): void {
    if (this.categoryItemEl && this._categoryImgEl) {
      this._categoryImgEl.nativeElement.onload = () => {
        const { R, G, B } = this.extractAvgColor(this._categoryImgEl.nativeElement, this.RATIO);
        this.categoryItemEl!.style.backgroundColor = `rgb(${R}, ${G},${B})`;
      };
    }
  }

  private extractAvgColor(imageEl: HTMLImageElement, ratio: number): { R: number; G: number; B: number } {
    const canvas = document.createElement('canvas');

    const width: number = (canvas.width = imageEl.width);
    const height: number = (canvas.height = imageEl.height);

    const context = canvas.getContext('2d');
    context?.drawImage(imageEl, 0, 0);

    let R = 0,
      G = 0,
      B = 0;

    let imageData: ImageData | undefined;

    try {
      if (context) {
        imageData = context!.getImageData(0, 0, width, height);
      }
    } catch (err) {
      console.error(err);
      return { R: 0, G: 0, B: 0 };
    }
    let index = -4,
      count = 0;

    if (imageData) {
      while ((index += ratio * 4) < imageData!.data.length) {
        ++count;

        R += imageData!.data[index];
        G += imageData!.data[index + 1];
        B += imageData!.data[index + 2];
      }
    }

    R = Math.floor(R / count);
    G = Math.floor(G / count);
    B = Math.floor(B / count);

    return { R, G, B };
  }
}
