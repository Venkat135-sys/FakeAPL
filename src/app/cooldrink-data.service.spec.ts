import { TestBed } from '@angular/core/testing';

import { CooldrinkDataService } from './cooldrink-data.service';

describe('CooldrinkDataService', () => {
  let service: CooldrinkDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CooldrinkDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
