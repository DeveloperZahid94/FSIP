import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPagesTypeListComponent } from './view-pages-type-list.component';

describe('ViewPagesTypeListComponent', () => {
  let component: ViewPagesTypeListComponent;
  let fixture: ComponentFixture<ViewPagesTypeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPagesTypeListComponent]
    });
    fixture = TestBed.createComponent(ViewPagesTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
