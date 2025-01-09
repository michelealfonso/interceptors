import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthenticationService, private router: Router) { }

  login() {
    if (this.authService.authenticate(this.email, this.password)) {
      // Simula il login con un token fittizio
      const token = 'faketoken123';
      this.authService.login(token);  // Salva il token nel servizio di autenticazione

      // Reindirizza alla pagina protetta dopo il login
      this.router.navigate(['/protected']);
    } else {
      this.errorMessage = 'Credenziali non valide!';  // Mostra un messaggio di errore
    }
  }
}
