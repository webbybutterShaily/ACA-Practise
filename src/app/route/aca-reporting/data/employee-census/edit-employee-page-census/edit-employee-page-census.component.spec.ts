import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeePageCensusComponent } from './edit-employee-page-census.component';

describe('EditEmployeePageCensusComponent', () => {
  let component: EditEmployeePageCensusComponent;
  let fixture: ComponentFixture<EditEmployeePageCensusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeePageCensusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeePageCensusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
