import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageArticleDisplayComponent } from './page-article-display.component';

describe('PageArticleDisplayComponent', () => {
  let component: PageArticleDisplayComponent;
  let fixture: ComponentFixture<PageArticleDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageArticleDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageArticleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
