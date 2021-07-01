import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageProfolioDisplayComponent } from './page-profolio-display.component';

describe('PageProfolioDisplayComponent', () => {
  let component: PageProfolioDisplayComponent;
  let fixture: ComponentFixture<PageProfolioDisplayComponent>;

  beforeEach(waitForAsync(() => {
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
