import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrimleadingzerosComponent } from './trimleadingzeros.component';

describe('TrimleadingzerosComponent', () => {
  let component: TrimleadingzerosComponent;
  let fixture: ComponentFixture<TrimleadingzerosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrimleadingzerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimleadingzerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
