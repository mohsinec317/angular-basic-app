import { TestBed } from '@angular/core/testing';

import { LoadjsonService } from './loadjson.service';

describe('LoadjsonService', () => {
  let service: LoadjsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadjsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
