import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCustomersDialogComponent } from './add-edit-customers-dialog.component';

describe('AddEditCustomersDialogComponent', () => {
  let component: AddEditCustomersDialogComponent;
  let fixture: ComponentFixture<AddEditCustomersDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditCustomersDialogComponent]
    });
    fixture = TestBed.createComponent(AddEditCustomersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
