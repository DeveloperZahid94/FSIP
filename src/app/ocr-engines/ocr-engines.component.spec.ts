import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrEnginesComponent } from './ocr-engines.component';

describe('OcrEnginesComponent', () => {
  let component: OcrEnginesComponent;
  let fixture: ComponentFixture<OcrEnginesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OcrEnginesComponent]
    });
    fixture = TestBed.createComponent(OcrEnginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
