import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimleadingzerosComponent } from './trimleadingzeros.component';

describe('TrimleadingzerosComponent', () => {
  let component: TrimleadingzerosComponent;
  let fixture: ComponentFixture<TrimleadingzerosComponent>;

  beforeEach(async(() => {
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
