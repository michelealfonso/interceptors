import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule,
    FormsModule  // Assicurati che FormsModule sia importato per usare ngModel
  ]
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthenticationService, private router: Router) { }

  login() {
    if (this.authService.authenticate(this.email, this.password)) {
      const token = 'faketoken123';
      this.authService.login(token);
      this.router.navigate(['/logout']);  // Naviga dopo il login
    } else {
      this.errorMessage = 'Credenziali non valide!';
    }
  }
}


// da notare che router.vnavigate mi sostituisce il routerlink che si fa nell'html, ma sono equivalenti.
