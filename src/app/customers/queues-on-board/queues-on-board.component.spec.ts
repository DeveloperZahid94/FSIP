import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuesOnBoardComponent } from './queues-on-board.component';

describe('QueuesOnBoardComponent', () => {
  let component: QueuesOnBoardComponent;
  let fixture: ComponentFixture<QueuesOnBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueuesOnBoardComponent]
    });
    fixture = TestBed.createComponent(QueuesOnBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
