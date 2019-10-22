import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProfolioDisplayComponent } from './page-profolio-display.component';

describe('PageProfolioDisplayComponent', () => {
  let component: PageProfolioDisplayComponent;
  let fixture: ComponentFixture<PageProfolioDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProfolioDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProfolioDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
