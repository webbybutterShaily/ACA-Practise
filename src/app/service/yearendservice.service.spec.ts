import { TestBed } from '@angular/core/testing';

import { YearendserviceService } from './yearendservice.service';

describe('YearendserviceService', () => {
  let service: YearendserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearendserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
