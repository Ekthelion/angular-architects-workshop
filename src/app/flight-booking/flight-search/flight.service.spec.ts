import { TestBed } from '@angular/core/testing';

import { AbstractFlightService } from './flight.service';
import { HttpClientModule } from '@angular/common/http';

describe('AbstractFlightService', () => {
  let service: AbstractFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AbstractFlightService],
    });
    service = TestBed.inject(AbstractFlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
