import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UrlImageToBase64Component } from './url-image-to-base64.component';

describe('UrlImageToBase64Component', () => {
  let component: UrlImageToBase64Component;
  let fixture: ComponentFixture<UrlImageToBase64Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlImageToBase64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlImageToBase64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
