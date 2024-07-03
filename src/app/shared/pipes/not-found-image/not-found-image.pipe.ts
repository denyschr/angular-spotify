import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notFoundImage'
})
export class NotFoundImagePipe implements PipeTransform {
  transform(image: string | undefined): string {
    if (image) return image;
    else return 'assets/images/not-found-image.jpg';
  }
}
