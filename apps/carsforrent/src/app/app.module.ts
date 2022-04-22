import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { ReviewComponent } from './review/review.component';
import { UsersComponent } from './users/users.component';
import { BookingsComponent } from './bookings/bookings.component';
import { PaymentComponent } from './payment/payment.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { CarDetailsComponent } from './car-details/car-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsComponent } from './cars/cars.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    SidenavListComponent,
    SignupComponent,
    SearchComponent,
    ResultsComponent,
    ReviewComponent,
    UsersComponent,
    BookingsComponent,
    PaymentComponent,
    UserDetailsComponent,
    CarDetailsComponent,
    UsersListComponent,
    BookingsListComponent,
    CarsListComponent,
    CarsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
