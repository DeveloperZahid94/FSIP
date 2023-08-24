import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditQueuesComponent } from './add-edit-queues.component';

describe('AddEditQueuesComponent', () => {
  let component: AddEditQueuesComponent;
  let fixture: ComponentFixture<AddEditQueuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditQueuesComponent]
    });
    fixture = TestBed.createComponent(AddEditQueuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
