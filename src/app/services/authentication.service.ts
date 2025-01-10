import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private tokenKey = 'authToken';
  private validCredentials = {
    email: 'user@example.com',
    password: 'password123'
  };

  constructor() {}

  private get isBrowser(): boolean {
    // Verifica se 'localStorage' è definito, il che indica che siamo nel browser
    return typeof localStorage !== 'undefined';
  }

  login(token: string): void {
    if (this.isBrowser) {
      localStorage.setItem(this.tokenKey, token);
      console.log(this.tokenKey)
    }
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.tokenKey);
    }
  }

  isAuthenticated(): boolean {
    if (this.isBrowser) {
      return localStorage.getItem(this.tokenKey) !== null;
    }
    return false;
  }

  authenticate(email: string, password: string): boolean {
    return email === this.validCredentials.email && password === this.validCredentials.password;
  }
}
