import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldLibraryComponent } from './field-library.component';

describe('FieldLibraryComponent', () => {
  let component: FieldLibraryComponent;
  let fixture: ComponentFixture<FieldLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldLibraryComponent]
    });
    fixture = TestBed.createComponent(FieldLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
