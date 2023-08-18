import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignUnasignItemsComponent } from './asign-unasign-items.component';

describe('AsignUnasignItemsComponent', () => {
  let component: AsignUnasignItemsComponent;
  let fixture: ComponentFixture<AsignUnasignItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignUnasignItemsComponent]
    });
    fixture = TestBed.createComponent(AsignUnasignItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
