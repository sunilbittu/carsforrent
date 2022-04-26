import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { StoreCarService } from '../store-car.service';

@Component({
  selector: 'carsforrent-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent {
  slotsFrom = new FormControl(null, [Validators.required]);
  slotsTo = new FormControl(null, [Validators.required]);

  addressForm = this.fb.group({
    carName: [null, Validators.required],
    image: [null, Validators.required],
    seats: [null, Validators.required],
    carType: [null, Validators.required],
    transmission: [null, Validators.required],
    deliveryType: [null, Validators.required],
    note: [null, Validators.required],
    brand: [null, Validators.required],
    price: [null, Validators.required],
    countInStock: [null, Validators.required],
    rating: [null, Validators.required],
    numReviews: [null, Validators.required],
    fuelType: [null, Validators.required],
    locations: [null, Validators.required],
    freeKms: [null, Validators.required],
    deliveryCharges: [null, Validators.required],
    bookedTimeSlotsFrom: this.slotsFrom,
    bookedTimeSlotsTo: this.slotsTo,
    rentPerHour: [null, Validators.required],
    capacity: [null, Validators.required],
  });

  hasUnitNumber = false;

  types = [
    { name: 'Sedan', abbreviation: 'Sedan' },
    { name: 'SUV', abbreviation: 'SUV' },
    { name: 'Hatchback', abbreviation: 'Hatchback' },
    { name: 'Convertible', abbreviation: 'Convertible' },
  ];
  brands = [
    { name: 'Aston Martin', abbreviation: 'Aston Martin' },
    { name: 'Audi', abbreviation: 'Audi' },
    { name: 'BMW', abbreviation: 'BMW' },
    { name: 'Chevrolet', abbreviation: 'Chevrolet' },
    { name: 'Citroen', abbreviation: 'Citroen' },
    { name: 'Dacia', abbreviation: 'Dacia' },
    { name: 'Fiat', abbreviation: 'Fiat' },
    { name: 'Ford', abbreviation: 'Ford' },
    { name: 'Honda', abbreviation: 'Honda' },
  ];

  transmissions = [
    { name: 'Manual', abbreviation: 'Manual' },
    { name: 'Automatic', abbreviation: 'Automatic' },
  ];

  deliveryTypes = [
    { name: 'Self Drive', abbreviation: 'Self Drive' },
    { name: 'Rented', abbreviation: 'Rented' },
  ];

  fuelTypes = [
    { name: 'Petrol', abbreviation: 'Petrol' },
    { name: 'Diesel', abbreviation: 'Diesel' },
  ];

  weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  constructor(private fb: FormBuilder, private carService: StoreCarService) {}

  onSubmit(): void {
    this.carService.storeCar(this.addressForm.value).pipe().subscribe();
  }
}
