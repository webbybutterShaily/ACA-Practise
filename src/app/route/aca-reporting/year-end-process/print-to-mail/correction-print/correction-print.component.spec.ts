import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionPrintComponent } from './correction-print.component';

describe('CorrectionPrintComponent', () => {
  let component: CorrectionPrintComponent;
  let fixture: ComponentFixture<CorrectionPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
