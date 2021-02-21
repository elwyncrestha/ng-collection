import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { UrlImageToBase64Component } from '../url-image-to-base64/url-image-to-base64.component';

@Component({
  selector: 'app-base64-img-to-file',
  templateUrl: './base64-img-to-file.component.html',
  styleUrls: ['./base64-img-to-file.component.scss'],
})
export class Base64ImgToFileComponent
  extends UrlImageToBase64Component
  implements OnInit {
  constructor(protected readonly imageService: ImageService) {
    super(imageService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public convert(base64Img: string): void {
    const trimmed = base64Img.replace(/^data:image\/(png|jpg);base64,/, '');
    this.imageService.createBlobImageFileAndShow(trimmed);
  }
}
