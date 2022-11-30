import { TestBed } from '@angular/core/testing';

import { OrderSummariesService } from './order-summaries.service';

describe('OrderSummariesService', () => {
  let service: OrderSummariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderSummariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
