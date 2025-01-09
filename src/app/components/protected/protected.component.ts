import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css'],
  imports: [
    CommonModule
  ]
})
export class ProtectedComponent implements OnInit {

  data: any = {}; // Inizializzazione a un oggetto vuoto

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      // Se non autenticato, reindirizza alla pagina di login
      this.router.navigate(['/login']);
    } else {
      // Se autenticato, simula il caricamento di dati protetti
      this.data = { message: 'Dati protetti per l\'utente autenticato' };
    }
  }
}
