import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cars } from '../types/cars';
import { CarDetailsDTO } from './cars.dto';

@Injectable()
export class CarsService {
  constructor(@InjectModel('CarDetails') private carModel: Model<Cars>) {}

  async create(CarDetailsDTO: CarDetailsDTO) {
    const createdCar = new this.carModel(CarDetailsDTO);

    await createdCar.save();
    return createdCar;
  }

  async getAllCars() {
    return await this.carModel.find().exec();
  }
}
