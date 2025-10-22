import { TestBed } from '@angular/core/testing';

import { SailorsService } from './sailors.service';

describe('SailorsService', () => {
  let service: SailorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SailorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
