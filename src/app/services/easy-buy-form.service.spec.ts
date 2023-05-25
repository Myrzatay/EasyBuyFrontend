import { TestBed } from '@angular/core/testing';

import { EasyBuyFormService } from './easy-buy-form.service';

describe('EasyBuyFormService', () => {
  let service: EasyBuyFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasyBuyFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
