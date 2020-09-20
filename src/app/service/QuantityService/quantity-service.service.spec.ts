import { TestBed } from '@angular/core/testing';

import { QuantityServiceService } from './quantity-service.service';

describe('QuantityServiceService', () => {
  let service: QuantityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuantityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
