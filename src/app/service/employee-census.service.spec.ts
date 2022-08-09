import { TestBed } from '@angular/core/testing';

import { EmployeeCensusService } from './employee-census.service';

describe('EmployeeCensusService', () => {
  let service: EmployeeCensusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeCensusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
