/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  Location,
  Appearance,
} from '@angular-material-extensions/google-maps-autocomplete';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { IDates, SelectedLocation } from './../search/search.model';

import PlaceResult = google.maps.places.PlaceResult;
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'carsforrent-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent implements OnInit {
  public appearance = Appearance;
  public country: string;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult;
  public address = {};
  minDate = new Date();
  selectedDates: FormGroup;
  constructor(private store: Store<AppState>, private router: Router) {
    this.selectedDates = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });
    this.minDate = new Date();
  }

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
    console.log(result);
    this.address['address'] = result.formatted_address;
    this.address['city'] =
      result.address_components?.length &&
      result.address_components[2].long_name;
    this.store.dispatch({
      type: 'SEARCH_LOCATION',
      payload: <SelectedLocation>{
        address: result.formatted_address,
        city: 'London',
      },
    });
  }

  onLocationSelected(location: Location) {
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }

  search() {
    console.log(this.selectedDates.value);
    this.store.dispatch({
      type: 'SEARCH_DATES',
      payload: <IDates>{
        start: this.selectedDates.value.start,
        end: this.selectedDates.value.end,
      },
    });
    localStorage.setItem('dates', JSON.stringify(this.selectedDates.value));
    localStorage.setItem('location', JSON.stringify(this.address));
    this.router.navigateByUrl('/results');
  }
}
