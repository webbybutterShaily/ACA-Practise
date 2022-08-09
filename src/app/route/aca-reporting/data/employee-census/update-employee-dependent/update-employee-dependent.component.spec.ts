import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeDependentComponent } from './update-employee-dependent.component';

describe('UpdateEmployeeDependentComponent', () => {
  let component: UpdateEmployeeDependentComponent;
  let fixture: ComponentFixture<UpdateEmployeeDependentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeDependentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeDependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
