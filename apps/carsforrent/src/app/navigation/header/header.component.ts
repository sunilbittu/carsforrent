import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'carsforrent-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  @Output() sidenavClose = new EventEmitter();

  isAdmin = false;
  isLoggedIn = false;
  tokenExists = localStorage.getItem('token') ? true : false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const user = this.authService.getLoggedInUser();
    if (user.isAdmin && this.tokenExists) {
      this.isAdmin = true;
    }
    if (user.email || this.tokenExists) {
      this.isLoggedIn = true;
    }
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };

  public onLogout = () => {
    this.authService.logout();
    this.isLoggedIn = false;
    this.isAdmin = false;
  };
}
