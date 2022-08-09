import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAssignmentComponent } from './plan-assignment.component';

describe('PlanAssignmentComponent', () => {
  let component: PlanAssignmentComponent;
  let fixture: ComponentFixture<PlanAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
