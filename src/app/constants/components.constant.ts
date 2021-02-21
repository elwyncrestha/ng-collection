import { Type } from '@angular/core';
import { Base64ImgToFileComponent } from '../components/base64-img-to-file/base64-img-to-file.component';
import { OrderByComponent } from '../components/order-by/order-by.component';
import { SafeComponent } from '../components/safe/safe.component';
import { TrimleadingzerosComponent } from '../components/trimleadingzeros/trimleadingzeros.component';
import { UrlImageToBase64Component } from '../components/url-image-to-base64/url-image-to-base64.component';

export interface ComponentCollection {
  category: string;
  description: string;
  components: {
    name: string;
    description: string;
    component: Type<any>;
  }[];
}

export const COMPONENT_COLLECTIONS: ComponentCollection[] = [
  {
    category: 'Pipes',
    description: 'A collection of various useful pipes.',
    components: [
      {
        name: 'Trim Leading Zeros Pipe',
        description: 'Trims leading zeros in the number or the string.',
        component: TrimleadingzerosComponent,
      },
      {
        name: 'Order By Pipe',
        description: 'Sorts the list based on the provided key of the object.',
        component: OrderByComponent,
      },
      {
        name: 'Safe Pipe',
        description: 'Implementation of DOM sanitizer',
        component: SafeComponent,
      },
    ],
  },
  {
    category: 'Utilities',
    description: 'A collection of various utilities.',
    components: [
      {
        name: 'Image Resource to Base64 image',
        description: 'Converts image resource to base64 hash.',
        component: UrlImageToBase64Component,
      },
      {
        name: 'Base64 image to an image file',
        description: 'Converts base64 image to an image file.',
        component: Base64ImgToFileComponent
      }
    ],
  },
];
