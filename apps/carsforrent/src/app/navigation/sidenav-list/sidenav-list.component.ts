/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'carsforrent-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent {
  @Output() sidenavClose = new EventEmitter();

  constructor() {}

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}
