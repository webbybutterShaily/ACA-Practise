import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Delivery1095NavbarComponent } from './delivery1095-navbar.component';

describe('Delivery1095NavbarComponent', () => {
  let component: Delivery1095NavbarComponent;
  let fixture: ComponentFixture<Delivery1095NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Delivery1095NavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Delivery1095NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
