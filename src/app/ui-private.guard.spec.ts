import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { uiPrivateGuard } from './ui-private.guard';

describe('uiPrivateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => uiPrivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
