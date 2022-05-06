import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as moment from 'moment';
import { SearchDetailsDTO } from './search.dto';
import { Bookings } from '../types/bookings';
import { BookingDetailsDTO } from '../booking/booking.dto';
import { Cars } from '../types/cars';

@Injectable()
export class SearchService {
  constructor(@InjectModel('BookingDetails') private bookingsModel: Model<Bookings>,
  @InjectModel('CarDetails') private carsModel: Model<Cars>) {}
  async getAvailability (details: SearchDetailsDTO): Promise<any[]> {
    const { start, end } = details;
    let formattedStartDate = new Date(moment(start).toDate().toISOString());
    const formattedEndDate = new Date(moment(end).hours(23).minutes(59).seconds(59).toDate().toISOString());
    const bookings = await this.bookingsModel.find();
    const carsList = await this.carsModel.find();
    const dates = [];
    while (moment(formattedStartDate) <= moment(formattedEndDate)) {
      dates.push(moment(formattedStartDate).format('YYYY-MM-DD'));
      formattedStartDate = moment(formattedStartDate).add(1, 'days').toDate();
    }
    const filterBooking = bookings.filter(booking => dates.includes(moment(booking.start).format('YYYY-MM-DD')) || dates.includes(moment(booking.end).format('YYYY-MM-DD')));
    const filterCar = carsList.filter(car => filterBooking.every(booking => booking.id !== car.id));

    return filterCar
  }
}