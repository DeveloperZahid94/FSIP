import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFieldListComponent } from './view-field-list.component';

describe('ViewFieldListComponent', () => {
  let component: ViewFieldListComponent;
  let fixture: ComponentFixture<ViewFieldListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFieldListComponent]
    });
    fixture = TestBed.createComponent(ViewFieldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
