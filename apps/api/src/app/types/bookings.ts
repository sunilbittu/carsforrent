import { Document } from 'mongoose';

export interface Bookings extends Document {
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
  start: string;
  end: string;
  address: string;
  city: string;
  img?: string;
  email: string;
}
