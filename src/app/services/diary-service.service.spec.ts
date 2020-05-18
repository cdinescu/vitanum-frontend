import { TestBed } from '@angular/core/testing';

import { DiaryServiceService } from './diary-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiaryEntry } from '../common/diary-entry';
import { OKTA_CONFIG, OktaAuthModule, OktaAuthService, UserClaims } from '@okta/okta-angular';
import { OktaConstants } from '../testing/okta-constants';
import { MyUserClaim } from '../testing/my-user-claim';

describe('DiaryServiceService', () => {
  let service: DiaryServiceService;

  let oktaAuthService: OktaAuthService;
  let userClaimsPromise: Promise<UserClaims>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, OktaAuthModule],
      providers: [{ provide: OKTA_CONFIG, useValue: OktaConstants.OKTA_CONFIG }]
    });

    oktaAuthService = TestBed.inject(OktaAuthService);
    const myClaim = new MyUserClaim();
    myClaim.preferred_username = 'cristina';

    userClaimsPromise = new Promise<UserClaims>(uc => myClaim);
    spyOn(oktaAuthService, 'getUser').and.returnValue(userClaimsPromise);
    service = TestBed.inject(DiaryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to get diary entries', () => {
    expect(service.getDiaryEntries(new Date())).toBeInstanceOf(Observable);
  });

  it('should be able to create a new diary entry', () => {
    expect(service.postDiaryEntry(new DiaryEntry())).toBeInstanceOf(Observable);
  });

  it('should be able to update a diary entry', () => {
    expect(service.updateDiaryEntry(new DiaryEntry())).toBeInstanceOf(Observable);
  });

  it('should be able to delete a diary entry', () => {
    expect(service.deleteDiaryEntry(1)).toBeInstanceOf(Observable);
  });
});
