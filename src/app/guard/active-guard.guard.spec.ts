import { TestBed, async, inject } from '@angular/core/testing';

import { ActiveGuardGuard } from './active-guard.guard';

describe('ActiveGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveGuardGuard]
    });
  });

  it('should ...', inject([ActiveGuardGuard], (guard: ActiveGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
