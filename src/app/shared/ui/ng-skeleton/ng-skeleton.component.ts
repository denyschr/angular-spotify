import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'ng-skeleton',
  templateUrl: './ng-skeleton.component.html',
  styleUrl: './ng-skeleton.component.scss'
})
export class NgSkeletonComponent implements AfterViewInit {
  constructor(private _renderer: Renderer2) {}

  @ViewChild('skeleton') skeletonEl?: ElementRef;

  @Input() width?: string;
  @Input() height?: string;
  @Input() marginT?: string;
  @Input() marginB?: string;
  @Input() marginR?: string;
  @Input() marginL?: string;
  @Input() borderRadius?: string;
  @Input() background?: string;

  ngAfterViewInit(): void {
    this._renderer.setStyle(this.skeletonEl?.nativeElement, 'width', this.width);
    this._renderer.setStyle(this.skeletonEl?.nativeElement, 'height', this.height);
    this._renderer.setStyle(this.skeletonEl?.nativeElement, 'margin-top', this.marginT);
    this._renderer.setStyle(this.skeletonEl?.nativeElement, 'margin-bottom', this.marginB);
    this._renderer.setStyle(this.skeletonEl?.nativeElement, 'margin-right', this.marginR);
    this._renderer.setStyle(this.skeletonEl?.nativeElement, 'margin-left', this.marginL);
    this._renderer.setStyle(this.skeletonEl?.nativeElement, 'border-radius', this.borderRadius);
    this._renderer.setStyle(this.skeletonEl?.nativeElement, 'background', this.background);
  }
}
