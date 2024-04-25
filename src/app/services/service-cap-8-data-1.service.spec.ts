import { TestBed } from '@angular/core/testing';

import { ServiceCap8Data1Service } from './service-cap-8-data-1.service';

describe('ServiceCap8Data1Service', () => {
  let service: ServiceCap8Data1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCap8Data1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
