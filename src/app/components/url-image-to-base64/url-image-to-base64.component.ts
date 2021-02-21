import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SafePipeType } from 'src/app/pipes/collections';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-url-image-to-base64',
  templateUrl: './url-image-to-base64.component.html',
  styleUrls: ['./url-image-to-base64.component.scss'],
})
export class UrlImageToBase64Component implements OnInit {
  public imageUrl =
    'https://thumbs.dreamstime.com/z/beauty-woman-model-brunette-girl-portrait-isolated-white-background-34655941.jpg';
  public base64Image: Observable<string>;
  public SafePipeType = SafePipeType;

  constructor(protected readonly imageService: ImageService) {}

  ngOnInit(): void {
    this.base64Image = this.imageService
      .getBase64ImageFromURL(this.imageUrl)
      .pipe(map((image) => `data:image/jpg;base64,${image}`));
  }
}
