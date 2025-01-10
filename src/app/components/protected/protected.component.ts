import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css'],
  imports: [CommonModule]
})
export class ProtectedComponent implements OnInit {

  data: any = {};

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    } else {
      this.data = { message: 'Dati protetti per l\'utente autenticato' };
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);  // Reindirizza alla pagina di login dopo il logout
  }
}
