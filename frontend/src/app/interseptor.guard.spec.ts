import { TestBed } from '@angular/core/testing';

import { InterseptorGuard } from './interseptor.guard';

describe('InterseptorGuard', () => {
  let guard: InterseptorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InterseptorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
