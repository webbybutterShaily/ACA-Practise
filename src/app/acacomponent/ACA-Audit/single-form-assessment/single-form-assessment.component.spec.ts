import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFormAssessmentComponent } from './single-form-assessment.component';

describe('SingleFormAssessmentComponent', () => {
  let component: SingleFormAssessmentComponent;
  let fixture: ComponentFixture<SingleFormAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFormAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFormAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
