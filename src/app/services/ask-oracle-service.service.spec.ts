import { TestBed } from '@angular/core/testing';

import { AskOracleServiceService } from './ask-oracle-service.service';
import { HttpClientModule } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';

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

  it('should have the nutrient map', () => {
    expect(service.getNutrientNames().length).toEqual(32);
  });

  it('should return an empty observable if the request\'s food name is null', () => {
    expect(service.sendRequest(null, 10)).toEqual(EMPTY);
  });

  it('should return an empty observable if the request\'s food count is null', () => {
    expect(service.sendRequest('Iron', null)).toEqual(EMPTY);
  });

  it('should return a non-empty observable if the request parameters are not null', () => {
    expect(service.sendRequest('Iron', 10)).toBeInstanceOf(Observable);
  });
});
