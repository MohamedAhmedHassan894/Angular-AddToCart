import { TestBed } from '@angular/core/testing';

import { CartHandlerService } from './cart-handler.service';

describe('CartHandlerService', () => {
  let service: CartHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
