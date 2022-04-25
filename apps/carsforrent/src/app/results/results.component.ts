/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'carsforrent-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  constructor(private router: Router) {}

  handleBookNow() {
    this.router.navigateByUrl('/review');
  }
}
