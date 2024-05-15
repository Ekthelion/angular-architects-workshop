import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrl: './flight-details.component.scss',
})
export class FlightDetailsComponent implements OnInit {
  public id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
  }
}
