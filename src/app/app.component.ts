import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet
  ]
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      // Se non autenticato, reindirizza alla pagina di login
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);  // Reindirizza alla pagina di login dopo il logout
  }
}
