import { TestBed } from '@angular/core/testing';

import { BreadCrumbServiceService } from './bread-crumb-service.service';

describe('BreadCrumbServiceService', () => {
  let service: BreadCrumbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreadCrumbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
