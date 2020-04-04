import { TestBed } from '@angular/core/testing';

import { FoodService } from './food.service';
import { HttpClientModule } from '@angular/common/http';

describe('FoodService', () => {
  let service: FoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(FoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
