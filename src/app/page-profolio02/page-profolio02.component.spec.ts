import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageProfolio02Component } from './page-profolio02.component';

describe('PageProfolio02Component', () => {
  let component: PageProfolio02Component;
  let fixture: ComponentFixture<PageProfolio02Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProfolio02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProfolio02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
