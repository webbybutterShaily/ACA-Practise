import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintToMailNavbarComponent } from './print-to-mail-navbar.component';

describe('PrintToMailNavbarComponent', () => {
  let component: PrintToMailNavbarComponent;
  let fixture: ComponentFixture<PrintToMailNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintToMailNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintToMailNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
