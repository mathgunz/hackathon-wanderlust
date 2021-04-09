import { TestBed } from '@angular/core/testing';

import { Guia.ServiceService } from './guia.service.service';

describe('Guia.ServiceService', () => {
  let service: Guia.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Guia.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
