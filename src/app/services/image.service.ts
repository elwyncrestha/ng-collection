import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor() {}

  public getBase64ImageFromURL(url: string): Observable<string> {
    return new Observable((observer: Observer<string>) => {
      // create an image object
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        // This will call another method that will create image from url
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  public getBase64Image(img: HTMLImageElement): string {
    // We create a HTML canvas object that will create a 2d image
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    // This will draw image
    ctx.drawImage(img, 0, 0);
    // Convert the drawn image to Data URL
    const dataURL = canvas.toDataURL('image/png');
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }

  /**
   * Method to convert Base64Data Url as Image Blob
   * @param dataURI Base64 URL
   */
  public dataURItoBlob(dataURI: string): Observable<Blob> {
    return new Observable((observer: Observer<Blob>) => {
      const byteString: string = window.atob(dataURI);
      const arrayBuffer: ArrayBuffer = new ArrayBuffer(byteString.length);
      const int8Array: Uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteString.length; i++) {
        int8Array[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([int8Array], { type: 'image/jpeg' });
      observer.next(blob);
      observer.complete();
    });
  }

  /**
   * Method that will create Blob and show in new window
   * @param base64Url Base64 URL
   */
  public createBlobImageFileAndShow(base64Url: string): void {
    this.dataURItoBlob(base64Url).subscribe((blob: Blob) => {
      const imageBlob: Blob = blob;
      const imageName = 'test.img';
      const imageFile: File = new File([imageBlob], imageName, {
        type: 'image/jpeg'
      });
      const generatedImage = window.URL.createObjectURL(imageFile);
      window.open(generatedImage);
    });
  }
}
