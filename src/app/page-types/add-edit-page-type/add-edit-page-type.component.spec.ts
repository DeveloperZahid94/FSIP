import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPageTypeComponent } from './add-edit-page-type.component';

describe('AddEditPageTypeComponent', () => {
  let component: AddEditPageTypeComponent;
  let fixture: ComponentFixture<AddEditPageTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditPageTypeComponent]
    });
    fixture = TestBed.createComponent(AddEditPageTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
