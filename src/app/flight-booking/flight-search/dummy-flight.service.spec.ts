import { TestBed } from '@angular/core/testing';

import { DummyFlightService } from './dummy-flight.service';

describe('DummyFlightService', () => {
  let service: DummyFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DummyFlightService],
    });
    service = TestBed.inject(DummyFlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
