import { TestBed, async, inject } from '@angular/core/testing';

import { HomeguardGuard } from './homeguard.guard';

describe('HomeguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeguardGuard]
    });
  });

  it('should ...', inject([HomeguardGuard], (guard: HomeguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
