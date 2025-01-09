import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule
  ]
})
export class AppComponent {
  constructor(public authService: AuthenticationService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
