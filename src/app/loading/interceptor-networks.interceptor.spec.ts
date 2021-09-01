import { TestBed } from '@angular/core/testing';

import { InterceptorNetworksInterceptor } from './interceptor-networks.interceptor';

describe('InterceptorNetworksInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorNetworksInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorNetworksInterceptor = TestBed.inject(InterceptorNetworksInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
