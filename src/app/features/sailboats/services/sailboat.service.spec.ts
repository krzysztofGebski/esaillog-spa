import { TestBed } from '@angular/core/testing';

import { SailboatService } from './sailboat.service';

describe('SailboatService', () => {
  let service: SailboatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SailboatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
