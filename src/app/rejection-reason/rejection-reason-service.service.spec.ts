import { TestBed } from '@angular/core/testing';

import { RejectionReasonServiceService } from './rejection-reason-service.service';

describe('RejectionReasonServiceService', () => {
  let service: RejectionReasonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RejectionReasonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
