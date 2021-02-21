import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const NG_MATERIAL_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatExpansionModule,
  MatCardModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...NG_MATERIAL_MODULES],
  exports: [...NG_MATERIAL_MODULES],
})
export class ThemeModule {}
