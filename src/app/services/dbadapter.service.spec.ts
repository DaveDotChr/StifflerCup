import { TestBed } from '@angular/core/testing';

import { DBAdapterService } from './dbadapter.service';

describe('DBAdapterService', () => {
  let service: DBAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DBAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
