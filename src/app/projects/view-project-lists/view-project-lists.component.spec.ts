import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectListsComponent } from './view-project-lists.component';

describe('ViewProjectListsComponent', () => {
  let component: ViewProjectListsComponent;
  let fixture: ComponentFixture<ViewProjectListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProjectListsComponent]
    });
    fixture = TestBed.createComponent(ViewProjectListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
