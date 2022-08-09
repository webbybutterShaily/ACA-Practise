import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxYearDropDownComponent } from './tax-year-drop-down.component';

describe('TaxYearDropDownComponent', () => {
  let component: TaxYearDropDownComponent;
  let fixture: ComponentFixture<TaxYearDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxYearDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxYearDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
