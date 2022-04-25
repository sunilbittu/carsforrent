/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarRequest } from '../interfaces/interfaces';
import { StoreCarService } from '../store-car.service';

@Component({
  selector: 'carsforrent-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  public cars: CarRequest[];
  constructor(private router: Router, private carsService: StoreCarService) {}

  ngOnInit() {
    this.carsService.getAllCars().subscribe((res) => {
      console.log(res);
      this.cars = res;
    });
  }
  handleBookNow() {
    this.router.navigateByUrl('/review');
  }
}
