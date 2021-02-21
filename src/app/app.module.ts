import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesModule } from './pipes/pipes.module';
import { TrimleadingzerosComponent } from './components/trimleadingzeros/trimleadingzeros.component';
import { OrderByComponent } from './components/order-by/order-by.component';
import { DetailComponent } from './components/detail/detail.component';
import { SafeComponent } from './components/safe/safe.component';
import { UrlImageToBase64Component } from './components/url-image-to-base64/url-image-to-base64.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TrimleadingzerosComponent,
    OrderByComponent,
    DetailComponent,
    SafeComponent,
    UrlImageToBase64Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
