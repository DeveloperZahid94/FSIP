import { TestBed } from '@angular/core/testing';

import { OcrEnginesServiceService } from './ocr-engines-service.service';

describe('OcrEnginesServiceService', () => {
  let service: OcrEnginesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcrEnginesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
