import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bookings } from '../types/bookings';
import { BookingDetailsDTO } from './booking.dto';

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel('BookingDetails') private bookingModel: Model<Bookings>
  ) {}

  async create(bookingDetails: BookingDetailsDTO) {
    const booking = new this.bookingModel(bookingDetails);

    await booking.save();
    return booking;
  }

  async getAll() {
    return await this.bookingModel.find().exec();
  }
}
