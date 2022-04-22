import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { SearchComponent } from '../search/search.component';
import { ResultsComponent } from '../results/results.component';
import { ReviewComponent } from '../review/review.component';
import { UsersComponent } from '../users/users.component';
import { BookingsComponent } from '../bookings/bookings.component';
import { PaymentComponent } from '../payment/payment.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { CarDetailsComponent } from '../car-details/car-details.component';
import { CarsComponent } from '../cars/cars.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'search', component: SearchComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'users', component: UsersComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'car-details', component: CarDetailsComponent },
  { path: 'cars', component: CarsComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
