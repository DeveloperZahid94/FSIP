import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsOnboardComponent } from './forms-onboard.component';

describe('FormsOnboardComponent', () => {
  let component: FormsOnboardComponent;
  let fixture: ComponentFixture<FormsOnboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsOnboardComponent]
    });
    fixture = TestBed.createComponent(FormsOnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
