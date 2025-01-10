import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { NgModule } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './auth/auth.guard';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    AuthenticationService,
    AuthGuard,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
