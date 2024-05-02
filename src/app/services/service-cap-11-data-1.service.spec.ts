import { TestBed } from '@angular/core/testing';

import { ServiceCap11Data1Service } from './service-cap-11-data-1.service';

describe('ServiceCap11Data1Service', () => {
  let service: ServiceCap11Data1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCap11Data1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
