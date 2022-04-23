/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';

@Component({
  selector: 'carsforrent-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  public signupValid = true;
  public pwdMatch = true;
  public isAdmin = false;
  public username = '';
  public password = '';
  public cnfPassword = '';
  constructor() {}

  OnChange($event) {
    this.isAdmin = $event.checked;
  }
  public onSubmit(): void {
    if (this.password !== this.cnfPassword) {
      this.pwdMatch = false;
    } else {
      this.pwdMatch = true;
    }
  }
}
