/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'carsforrent-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent {
  constructor() {}
  priceId = 'price_1KsLopSG3qIpCwwIhwlN2GBr';
  stripePromise = loadStripe(
    'pk_test_51Ks9RASG3qIpCwwI5KFeZkEJ2GVxuIAUcrA4A6p8wa6xYdqVDkOTqx8a7A72II8Z1VsitpZ5DUWOhxMWzVX3K0dU00B3tXqw2g'
  );
  async checkout() {
    // Call your backend to create the Checkout session.
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await this.stripePromise;
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price: this.priceId, quantity: 1 }],
      successUrl: `${window.location.href}/success`,
      cancelUrl: `${window.location.href}/failure`,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    if (error) {
      console.log(error);
    }
  }
}
