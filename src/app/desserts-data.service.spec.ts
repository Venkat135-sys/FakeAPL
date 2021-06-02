import { TestBed } from '@angular/core/testing';

import { DessertsDataService } from './desserts-data.service';

describe('DessertsDataService', () => {
  let service: DessertsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DessertsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
