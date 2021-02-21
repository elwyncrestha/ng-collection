import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicModule } from 'ng-dynamic-component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponentModule } from './components/demo-component.module';
import { PipesModule } from './pipes/pipes.module';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ThemeModule,
    DemoComponentModule,
    DynamicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
