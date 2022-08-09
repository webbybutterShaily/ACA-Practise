import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffordabilityAssignmentComponent } from './affordability-assignment.component';

describe('AffordabilityAssignmentComponent', () => {
  let component: AffordabilityAssignmentComponent;
  let fixture: ComponentFixture<AffordabilityAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffordabilityAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffordabilityAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
