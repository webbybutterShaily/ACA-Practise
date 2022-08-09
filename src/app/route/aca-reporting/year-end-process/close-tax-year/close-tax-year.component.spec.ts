import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseTaxYearComponent } from './close-tax-year.component';

describe('CloseTaxYearComponent', () => {
  let component: CloseTaxYearComponent;
  let fixture: ComponentFixture<CloseTaxYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseTaxYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseTaxYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
