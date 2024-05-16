import { Component } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  ReplaySubject,
  Subject,
  filter,
  map,
  of,
  skip,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  private counter = 0;
  private subject = new Subject<number>();

  private behaviorSubject = new BehaviorSubject<number>(0);

  private replaySubject = new ReplaySubject<number>(3);

  private asyncSubject = new AsyncSubject<number>();

  constructor() {
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(
        filter((value) => value % 2 === 0),
        map((value) => value * 2),
        tap((value) => console.log('Value:', value)),
        skip(1)
      )
      .subscribe(console.log);

    // ASYNC DEMO

    // this.asyncSubject.subscribe(console.log);

    // setInterval(() => {
    //   this.counter++;
    //   if (this.counter === 5) {
    //     this.asyncSubject.complete();
    //   }
    //   this.asyncSubject.next(this.counter);
    // }, 1000);

    // BEHAVIOR DEMO

    // this.behaviorSubject.subscribe({
    //   next: (value) => console.log('Behavior:', value),
    //   complete: () => console.log('Behavior: Complete!'),
    //   error: (error) => console.error('Behavior Error:', error),
    // });

    // setInterval(() => {
    //   this.behaviorSubject.next(this.behaviorSubject.value + 1);
    // }, 1000);

    // SUBJECT DEMO

    // this.subject.subscribe({
    //   next: (value) => console.log('Subject:', value),
    //   complete: () => console.log('Subject: Complete!'),
    //   error: (error) => console.error('Subject Error:', error),
    // });

    // setInterval(() => {
    //   this.counter++;
    //   if (this.counter === 5) {
    //     this.subject.complete();
    //   }
    //   // if (this.counter === 5) {
    //   //   this.subject.error('Something went wrong!');
    //   // }
    //   this.subject.next(this.counter);
    // }, 1000);
  }
}
