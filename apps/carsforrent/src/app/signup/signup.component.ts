/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';

@Component({
  selector: 'carsforrent-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  public signupValid = true;
  public username = '';
  public password = '';
  public cnfPassword = '';
  constructor() {}

  public onSubmit(): void {
    /* signup functionality */
    console.log('signup', this.username, this.password, this.cnfPassword);
  }
}
