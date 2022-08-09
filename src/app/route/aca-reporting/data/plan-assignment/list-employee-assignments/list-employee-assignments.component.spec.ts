import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeeAssignmentsComponent } from './list-employee-assignments.component';

describe('ListEmployeeAssignmentsComponent', () => {
  let component: ListEmployeeAssignmentsComponent;
  let fixture: ComponentFixture<ListEmployeeAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployeeAssignmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeeAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
