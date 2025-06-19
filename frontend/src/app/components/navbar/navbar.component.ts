import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar color="primary">
      <span routerLink="/products" style="cursor: pointer">Smart Grocery</span>
      <span class="spacer"></span>
      <ng-container *ngIf="authService.isLoggedIn(); else loginButton">
        <button mat-button (click)="logout()">Logout</button>
      </ng-container>
      <ng-template #loginButton>
        <button mat-button routerLink="/login">Login</button>
        <button mat-button routerLink="/signup">Sign Up</button>
      </ng-template>
    </mat-toolbar>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
  `]
})
export class NavbarComponent {
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
} 