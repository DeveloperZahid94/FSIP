import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFieldLibraryComponent } from './add-edit-field-library.component';

describe('AddEditFieldLibraryComponent', () => {
  let component: AddEditFieldLibraryComponent;
  let fixture: ComponentFixture<AddEditFieldLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditFieldLibraryComponent]
    });
    fixture = TestBed.createComponent(AddEditFieldLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
