import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimLeadingZerosPipe } from './collections/index';

const PIPES = [
  TrimLeadingZerosPipe
];

@NgModule({
  declarations: [...PIPES],
  imports: [CommonModule],
  exports: [...PIPES]
})
export class PipesModule { }
