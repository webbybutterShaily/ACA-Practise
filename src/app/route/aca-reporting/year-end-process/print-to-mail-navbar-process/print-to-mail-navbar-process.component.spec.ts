import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintToMailNavbarProcessComponent } from './print-to-mail-navbar-process.component';

describe('PrintToMailNavbarProcessComponent', () => {
  let component: PrintToMailNavbarProcessComponent;
  let fixture: ComponentFixture<PrintToMailNavbarProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintToMailNavbarProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintToMailNavbarProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
