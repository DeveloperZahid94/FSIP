import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRejectionReasonListsComponent } from './view-rejection-reason-lists.component';

describe('ViewRejectionReasonListsComponent', () => {
  let component: ViewRejectionReasonListsComponent;
  let fixture: ComponentFixture<ViewRejectionReasonListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRejectionReasonListsComponent]
    });
    fixture = TestBed.createComponent(ViewRejectionReasonListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
