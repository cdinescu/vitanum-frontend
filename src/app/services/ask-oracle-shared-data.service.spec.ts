import { TestBed } from '@angular/core/testing';

import { AskOracleSharedDataService } from './ask-oracle-shared-data.service';

describe('AskOracleSharedDataService', () => {
  let service: AskOracleSharedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AskOracleSharedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
