import { TestBed, inject } from '@angular/core/testing';

import { CallServiceService } from './call-service.service';

describe('CallServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallServiceService]
    });
  });

  it('should be created', inject([CallServiceService], (service: CallServiceService) => {
    expect(service).toBeTruthy();
  }));
});
