import { TestBed } from '@angular/core/testing';

import { AdminPartnerGuard } from './admin-partner.guard';

describe('AdminPartnerGuard', () => {
  let guard: AdminPartnerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminPartnerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
