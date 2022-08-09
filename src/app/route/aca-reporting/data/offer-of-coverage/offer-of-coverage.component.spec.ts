import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaReportingDataOfferOfCoverageComponent } from './offer-of-coverage.component';

describe('AcaReportingDataOfferOfCoverageComponent', () => {
  let component: AcaReportingDataOfferOfCoverageComponent;
  let fixture: ComponentFixture<AcaReportingDataOfferOfCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcaReportingDataOfferOfCoverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaReportingDataOfferOfCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
