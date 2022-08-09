import { TestBed } from '@angular/core/testing';

import { CustomersSetupService } from './customers-setup.service';

describe('CustomersSetupService', () => {
  let service: CustomersSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
