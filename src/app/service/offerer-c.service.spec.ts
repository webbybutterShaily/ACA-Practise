import { TestBed } from '@angular/core/testing';

import { OffererCService } from './offerer-c.service';

describe('OffererCService', () => {
  let service: OffererCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffererCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
