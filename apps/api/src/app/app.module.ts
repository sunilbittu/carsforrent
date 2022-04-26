import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CarsModule } from './cars/cars.module';
import { GeolocationModule } from './geolocation/geolocation.module';
import { BookingsModule } from './booking/bookings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'carsforrent'),
      exclude: ['/api*'],
    }),
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.irozl.mongodb.net/carsrent?retryWrites=true&w=majority',
      { useNewUrlParser: true }
    ),
    AuthModule,
    UserModule,
    GeolocationModule,
    CarsModule,
    BookingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
