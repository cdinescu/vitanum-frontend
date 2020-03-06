import { TestBed } from '@angular/core/testing';

import { AskOracleServiceService } from './ask-oracle-service.service';

describe('AskOracleServiceService', () => {
  let service: AskOracleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AskOracleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
