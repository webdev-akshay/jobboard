import { TestBed } from '@angular/core/testing';

import { JobboardService } from './jobboard.service';

describe('JobboardService', () => {
  let service: JobboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
