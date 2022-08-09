import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaReportingDataPlanBuilderComponent } from './plan-builder.component';

describe('PlanBuilderComponent', () => {
  let component: AcaReportingDataPlanBuilderComponent;
  let fixture: ComponentFixture<AcaReportingDataPlanBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcaReportingDataPlanBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaReportingDataPlanBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
