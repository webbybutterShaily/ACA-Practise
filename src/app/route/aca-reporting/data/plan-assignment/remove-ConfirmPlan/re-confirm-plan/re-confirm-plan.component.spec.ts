import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReConfirmPlanComponent } from './re-confirm-plan.component';

describe('ReConfirmPlanComponent', () => {
  let component: ReConfirmPlanComponent;
  let fixture: ComponentFixture<ReConfirmPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReConfirmPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReConfirmPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
