import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOcrEngineComponent } from './add-edit-ocr-engine.component';

describe('AddEditOcrEngineComponent', () => {
  let component: AddEditOcrEngineComponent;
  let fixture: ComponentFixture<AddEditOcrEngineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditOcrEngineComponent]
    });
    fixture = TestBed.createComponent(AddEditOcrEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
