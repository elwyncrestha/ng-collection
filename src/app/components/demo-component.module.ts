import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByComponent } from './order-by/order-by.component';
import { SafeComponent } from './safe/safe.component';
import { TrimleadingzerosComponent } from './trimleadingzeros/trimleadingzeros.component';
import { UrlImageToBase64Component } from './url-image-to-base64/url-image-to-base64.component';
import { PipesModule } from '../pipes/pipes.module';

const COMPONENTS = [
  TrimleadingzerosComponent,
  OrderByComponent,
  SafeComponent,
  UrlImageToBase64Component,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, PipesModule],
  exports: [...COMPONENTS],
})
export class DemoComponentModule {}
