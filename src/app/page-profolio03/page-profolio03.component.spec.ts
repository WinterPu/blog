import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageProfolio03Component } from './page-profolio03.component';

describe('PageProfolio03Component', () => {
  let component: PageProfolio03Component;
  let fixture: ComponentFixture<PageProfolio03Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProfolio03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProfolio03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
