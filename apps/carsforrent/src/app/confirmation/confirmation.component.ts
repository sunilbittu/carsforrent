import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'carsforrent-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  constructor(private router: Router) {}

  handleClick() {
    this.router.navigate(['/']);
    localStorage.removeItem('location');
    localStorage.removeItem('dates');
    localStorage.removeItem('car');
  }
  ngOnInit(): void {}
}
