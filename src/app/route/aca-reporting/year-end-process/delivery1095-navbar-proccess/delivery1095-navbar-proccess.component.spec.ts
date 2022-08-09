import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Delivery1095NavbarProccessComponent } from './delivery1095-navbar-proccess.component';

describe('Delivery1095NavbarProccessComponent', () => {
  let component: Delivery1095NavbarProccessComponent;
  let fixture: ComponentFixture<Delivery1095NavbarProccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Delivery1095NavbarProccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Delivery1095NavbarProccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
