import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimLeadingZerosPipe, OrderByPipe } from './collections/index';

const PIPES = [
  TrimLeadingZerosPipe,
  OrderByPipe
];

@NgModule({
  declarations: [...PIPES],
  imports: [CommonModule],
  exports: [...PIPES]
})
export class PipesModule { }
