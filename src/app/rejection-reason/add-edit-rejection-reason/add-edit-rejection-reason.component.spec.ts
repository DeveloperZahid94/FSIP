import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRejectionReasonComponent } from './add-edit-rejection-reason.component';

describe('AddEditRejectionReasonComponent', () => {
  let component: AddEditRejectionReasonComponent;
  let fixture: ComponentFixture<AddEditRejectionReasonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditRejectionReasonComponent]
    });
    fixture = TestBed.createComponent(AddEditRejectionReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
