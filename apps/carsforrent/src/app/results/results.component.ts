/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import _ from 'lodash';
import { AppState } from '../app.state';
import { CarRequest } from '../interfaces/interfaces';
import { IDates } from '../search/search.model';
import { StoreCarService } from '../store-car.service';
import { images } from './helper';

@Component({
  selector: 'carsforrent-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  public cars: CarRequest[];
  public dates: IDates;

  constructor(
    private router: Router,
    private carsService: StoreCarService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.carsService.getAllCars().subscribe((res) => {
      console.log(res);
      this.cars = res;
      this.getAvailableCars();
    });
  }
  getAvailableCars() {
    this.dates = JSON.parse(localStorage.getItem('dates') || '{}');
    console.log(this.dates);
    let startWeek = moment(this.dates.start); // 0 -- 6
    const endWeek = moment(this.dates.end); // 6 0
    const date: any = [];
    const weekArray = moment.weekdays();
    while (moment(startWeek) <= moment(endWeek)) {
      const day = weekArray[moment(startWeek).day()];
      date.push(day);
      startWeek = moment(startWeek).add(1, 'days');
    }
    const unique = _.uniqBy(date);
    console.log('startWeek ===> ', date, unique, weekArray);
    const arr: any = [];
    for (let i = 0; i < this.cars.length; i++) {
      for (let j = 0; j < this.cars[i].bookedTimeSlotsFrom.length; j++) {
        if (unique.includes(this.cars[i].bookedTimeSlotsFrom[j])) {
          arr.push(this.cars[i]);
        }
      }
    }
    const formattedData = _.uniqBy(arr, '_id');
    this.cars = formattedData.length
      ? formattedData.map((item) => ({
          ...item,
          img: images[Math.floor(Math.random() * 10)],
        }))
      : [];
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
