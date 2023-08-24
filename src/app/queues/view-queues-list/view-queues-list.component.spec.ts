import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQueuesListComponent } from './view-queues-list.component';

describe('ViewQueuesListComponent', () => {
  let component: ViewQueuesListComponent;
  let fixture: ComponentFixture<ViewQueuesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewQueuesListComponent]
    });
    fixture = TestBed.createComponent(ViewQueuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
