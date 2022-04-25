/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { CarRequest } from '../interfaces/interfaces';
import { StoreCarService } from '../store-car.service';

@Component({
  selector: 'carsforrent-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  public cars: CarRequest[];
  constructor(
    private router: Router,
    private carsService: StoreCarService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.carsService.getAllCars().subscribe((res) => {
      console.log(res);
      this.cars = res;
    });
  }
  handleBookNow(car: CarRequest) {
    console.log(car);
    this.store.dispatch({
      type: 'SELECTED_CAR',
      payload: car,
    });
    localStorage.setItem('car', JSON.stringify(car));
    this.router.navigateByUrl('/review');
  }
}
