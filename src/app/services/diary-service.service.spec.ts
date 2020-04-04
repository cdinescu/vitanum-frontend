import { TestBed } from '@angular/core/testing';

import { DiaryServiceService } from './diary-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('DiaryServiceService', () => {
  let service: DiaryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(DiaryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
