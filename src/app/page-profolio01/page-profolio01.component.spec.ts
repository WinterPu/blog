import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageProfolio01Component } from './page-profolio01.component';

describe('PageProfolio01Component', () => {
  let component: PageProfolio01Component;
  let fixture: ComponentFixture<PageProfolio01Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProfolio01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProfolio01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
