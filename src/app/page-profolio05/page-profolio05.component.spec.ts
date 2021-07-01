import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageProfolio05Component } from './page-profolio05.component';

describe('PageProfolio05Component', () => {
  let component: PageProfolio05Component;
  let fixture: ComponentFixture<PageProfolio05Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProfolio05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProfolio05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
