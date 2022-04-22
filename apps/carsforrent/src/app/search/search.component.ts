/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  Location,
  Appearance,
} from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;

@Component({
  selector: 'carsforrent-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent implements OnInit {
  public appearance = Appearance;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult;

  constructor() {}

  ngOnInit() {
    this.setCurrentPosition();
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }

  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result);
  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }

  search() {
    console.log('search');
  }
}
