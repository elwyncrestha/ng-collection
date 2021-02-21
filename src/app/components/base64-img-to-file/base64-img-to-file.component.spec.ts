import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64ImgToFileComponent } from './base64-img-to-file.component';

describe('Base64ImgToFileComponent', () => {
  let component: Base64ImgToFileComponent;
  let fixture: ComponentFixture<Base64ImgToFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Base64ImgToFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Base64ImgToFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
