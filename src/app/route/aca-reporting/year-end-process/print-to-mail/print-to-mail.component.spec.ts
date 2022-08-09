import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintToMailComponent } from './print-to-mail.component';

describe('PrintToMailComponent', () => {
  let component: PrintToMailComponent;
  let fixture: ComponentFixture<PrintToMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintToMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintToMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
