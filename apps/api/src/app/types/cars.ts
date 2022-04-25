import { Document } from 'mongoose';

export interface Cars extends Document {
  carName: string;
  seats: number;
  carType: string;
  transmission: string;
  deliveryType: string;
  note: string;
  brand: string;
  price: string;
  countInStock: string;
  rating: string;
  numReviews: string;
  fuelType: string;
  locations: string;
  freeKms: string;
  deliveryCharges: string;
  bookedTimeSlotsFrom: [];
  bookedTimeSlotsTo: [];
  rentPerHour: string;
  capacity: string;
}
