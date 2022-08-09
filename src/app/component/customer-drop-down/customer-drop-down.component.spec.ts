import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDropDownComponent } from './customer-drop-down.component';

describe('CustomerDropDownComponent', () => {
  let component: CustomerDropDownComponent;
  let fixture: ComponentFixture<CustomerDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
