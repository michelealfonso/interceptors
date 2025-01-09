import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(
    // next: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      // Se non autenticato, reindirizza alla pagina di login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
