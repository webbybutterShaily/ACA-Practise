import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanBuilderformComponent } from './plan-builderform.component';

describe('PlanBuilderformComponent', () => {
  let component: PlanBuilderformComponent;
  let fixture: ComponentFixture<PlanBuilderformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanBuilderformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanBuilderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
