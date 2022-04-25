/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CarRequest, CarResponse } from './interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StoreCarService {
  constructor(private http: HttpClient) {}
  storeCar(carRequest: CarRequest): Observable<CarResponse> {
    console.log(carRequest);
    return this.http.post<CarResponse>('/api/cars/create', carRequest).pipe(
      tap((res: CarResponse) => {
        console.log(res);
      })
    );
  }
}
