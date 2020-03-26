import { TestBed } from '@angular/core/testing';

import { SharedDiaryDataService } from './shared-diary-data.service';

describe('SharedSelectedDiaryDateService', () => {
  let service: SharedDiaryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDiaryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
