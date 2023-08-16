import { TestBed } from '@angular/core/testing';

import { PageTypeServiceService } from './page-type-service.service';

describe('PageTypeServiceService', () => {
  let service: PageTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
