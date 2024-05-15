import { TestBed } from '@angular/core/testing';
import { AsyncCityPipe } from './async-city.pipe';
import { AirportService } from '../services/airport.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AsyncCityPipe', () => {
  let service: AirportService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, AirportService],
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AirportService);
  });

  it('create an instance', () => {
    const pipe = new AsyncCityPipe(service);
    expect(pipe).toBeTruthy();
  });
});
