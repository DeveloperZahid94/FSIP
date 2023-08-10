import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRolesListComponent } from './view-roles-list.component';

describe('ViewRolesListComponent', () => {
  let component: ViewRolesListComponent;
  let fixture: ComponentFixture<ViewRolesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRolesListComponent]
    });
    fixture = TestBed.createComponent(ViewRolesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
