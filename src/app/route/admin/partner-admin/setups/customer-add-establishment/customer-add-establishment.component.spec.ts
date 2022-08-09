import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddEstablishmentComponent } from './customer-add-establishment.component';

describe('CustomerAddEstablishmentComponent', () => {
  let component: CustomerAddEstablishmentComponent;
  let fixture: ComponentFixture<CustomerAddEstablishmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddEstablishmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddEstablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
