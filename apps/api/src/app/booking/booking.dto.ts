import { CarDetailsDTO } from '../cars/cars.dto';

export interface BookingDetailsDTO extends CarDetailsDTO {
  start: string;
  end: string;
  address: string;
  city: string;
  img?: string;
  email: string;
}
