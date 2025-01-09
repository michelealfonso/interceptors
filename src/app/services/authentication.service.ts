import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private tokenKey = 'authToken';
  private validCredentials = {
    email: 'user@example.com',
    password: 'password123'  // Credenziali predefinite
  };

  constructor() {}

  login(token: string): void {
    localStorage.setItem(this.tokenKey, token);  // Salva il token fittizio nel localStorage
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);  // Rimuovi il token
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.tokenKey) !== null;  // Controlla se c'è un token
  }

  // Funzione per verificare se le credenziali sono valide
  authenticate(email: string, password: string): boolean {
    return email === this.validCredentials.email && password === this.validCredentials.password;
  }
}
