import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanBuildICHRACalculatorComponent } from './plan-build-ichracalculator.component';

describe('PlanBuildICHRACalculatorComponent', () => {
  let component: PlanBuildICHRACalculatorComponent;
  let fixture: ComponentFixture<PlanBuildICHRACalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanBuildICHRACalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanBuildICHRACalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
