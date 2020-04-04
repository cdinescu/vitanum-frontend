import { TestBed } from '@angular/core/testing';

import { AskOracleServiceService } from './ask-oracle-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('AskOracleServiceService', () => {
  let service: AskOracleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AskOracleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
