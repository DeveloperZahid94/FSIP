import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOnBoardingComponent } from './customer-on-boarding.component';

describe('CustomerOnBoardingComponent', () => {
  let component: CustomerOnBoardingComponent;
  let fixture: ComponentFixture<CustomerOnBoardingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerOnBoardingComponent]
    });
    fixture = TestBed.createComponent(CustomerOnBoardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
