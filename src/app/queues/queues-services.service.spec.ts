import { TestBed } from '@angular/core/testing';

import { QueuesServicesService } from './queues-services.service';

describe('QueuesServicesService', () => {
  let service: QueuesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueuesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
