import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimLeadingZerosPipe, OrderByPipe, SafePipe } from './collections/index';

const PIPES = [
  TrimLeadingZerosPipe,
  OrderByPipe,
  SafePipe,
];

@NgModule({
  declarations: [...PIPES],
  imports: [CommonModule],
  exports: [...PIPES]
})
export class PipesModule { }
