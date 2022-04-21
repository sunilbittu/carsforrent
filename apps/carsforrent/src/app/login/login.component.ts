/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'carsforrent-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public loginValid = true;
  public username = '';
  public password = '';

  constructor(private _router: Router) {}

  public onSubmit(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.loginValid = true;
      /* navigate to search */
      this._router.navigateByUrl('/search');
    } else {
      this.loginValid = false;
    }
  }
}
