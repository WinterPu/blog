import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProfolio02Component } from './page-profolio02.component';

describe('PageProfolio02Component', () => {
  let component: PageProfolio02Component;
  let fixture: ComponentFixture<PageProfolio02Component>;

  beforeEach(async(() => {
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
