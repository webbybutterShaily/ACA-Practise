import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCensusComponent } from './employee-census.component';

describe('EmployeeCensusComponent', () => {
  let component: EmployeeCensusComponent;
  let fixture: ComponentFixture<EmployeeCensusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCensusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCensusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
