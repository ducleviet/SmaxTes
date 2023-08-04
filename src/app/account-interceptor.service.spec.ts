import { TestBed } from '@angular/core/testing';

import { AccountInterceptorService } from './account-interceptor.service';

describe('AccountInterceptorService', () => {
  let service: AccountInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
