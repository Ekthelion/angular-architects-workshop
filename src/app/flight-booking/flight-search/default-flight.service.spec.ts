import { TestBed } from '@angular/core/testing';

import { DefaultFlightService } from './default-flight.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BASE_URL } from '../../config/base-url.token';

describe('DefaultFlightService', () => {
  let service: DefaultFlightService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        DefaultFlightService,
        {
          provide: BASE_URL,
          useValue: 'https://demo.angulararchitects.io/api/flight',
        },
      ],
      imports: [HttpClientModule],
    });
    service = TestBed.inject(DefaultFlightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
