import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageSearchResultComponent } from './page-search-result.component';

describe('PageSearchResultComponent', () => {
  let component: PageSearchResultComponent;
  let fixture: ComponentFixture<PageSearchResultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
