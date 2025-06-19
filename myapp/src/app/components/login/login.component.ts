import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      try {
        // Add your API call here
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.loginForm.value),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          this.router.navigate(['/dashboard']);
        } else {
          const errorData = await response.json();
          this.error = errorData.message || 'Login failed';
        }
      } catch (err) {
        this.error = 'An error occurred. Please try again.';
      }
    }
  }
} 