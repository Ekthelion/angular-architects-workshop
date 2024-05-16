import { Component, DestroyRef, OnDestroy, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { AbstractFlightService } from '../flight.service';
import { Flight } from '../../../entities/flights';
import {
  Subject,
  catchError,
  filter,
  interval,
  map,
  switchMap,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrl: './flight-details.component.scss',
})
export class FlightDetailsComponent implements OnInit, OnDestroy {
  public id: string | null = null;
  public flight: Flight | null = null;

  private destroy = new Subject<void>();

  public flight$ = this.route.paramMap.pipe(
    filter((params) => params.has('id')),
    map((params) => Number(params.get('id'))),
    filter((id) => !Number.isNaN(id)),
    switchMap((id) =>
      this.flightService.flightById(id).pipe(catchError(() => []))
    )
  );

  public interval$ = interval(1000);

  constructor(
    private route: ActivatedRoute,
    private flightService: AbstractFlightService,
    private destroyRef: DestroyRef
  ) {
    // this.interval$.pipe(takeUntil(this.destroy)).subscribe(console.log);
    this.interval$
      .pipe(
        // takeUntil(this.destroy),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(console.log);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy.next();
  }
}
