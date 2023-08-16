import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOcrEngineListsComponent } from './view-ocr-engine-lists.component';

describe('ViewOcrEngineListsComponent', () => {
  let component: ViewOcrEngineListsComponent;
  let fixture: ComponentFixture<ViewOcrEngineListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewOcrEngineListsComponent]
    });
    fixture = TestBed.createComponent(ViewOcrEngineListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
