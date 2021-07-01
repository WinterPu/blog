import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageArchiveComponent } from './page-archive.component';

describe('PageArchiveComponent', () => {
  let component: PageArchiveComponent;
  let fixture: ComponentFixture<PageArchiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
