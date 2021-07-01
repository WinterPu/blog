import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageProfolio04Component } from './page-profolio04.component';

describe('PageProfolio04Component', () => {
  let component: PageProfolio04Component;
  let fixture: ComponentFixture<PageProfolio04Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProfolio04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProfolio04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
