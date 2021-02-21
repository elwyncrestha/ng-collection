import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

const NG_MATERIAL_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatExpansionModule,
  MatCardModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...NG_MATERIAL_MODULES],
  exports: [...NG_MATERIAL_MODULES],
})
export class ThemeModule {}
