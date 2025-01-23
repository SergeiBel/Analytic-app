import { TestBed } from '@angular/core/testing';

import { BundesligaRestService } from './bundesliga-rest.service';

describe('BundesligaRestServiceService', () => {
  let service: BundesligaRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BundesligaRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
