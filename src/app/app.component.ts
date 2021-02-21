import { Component } from '@angular/core';
import { COMPONENT_COLLECTIONS } from './constants/components.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public collections = COMPONENT_COLLECTIONS;
}
