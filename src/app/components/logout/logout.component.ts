import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private authService: AuthenticationService, private router: Router) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);  // Reindirizza alla pagina di login
  }
}
