import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerdataComponent } from './employerdata.component';

describe('EmployerdataComponent', () => {
  let component: EmployerdataComponent;
  let fixture: ComponentFixture<EmployerdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
