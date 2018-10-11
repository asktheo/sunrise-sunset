import { TestBed } from '@angular/core/testing';

import { SunServiceService } from './sun-service.service';

describe('SunServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SunServiceService = TestBed.get(SunServiceService);
    expect(service).toBeTruthy();
  });
});
