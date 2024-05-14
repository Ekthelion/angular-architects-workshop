import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDateComponent } from './flight-date.component';

describe('FlightDateComponent', () => {
  let component: FlightDateComponent;
  let fixture: ComponentFixture<FlightDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
