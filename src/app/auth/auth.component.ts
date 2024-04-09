import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import { Router } from '@angular/router';
import {AuthService} from "../services/auth.service";

@Component({
  standalone: true,
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  imports: [
    MatCardTitle,
    MatCardContent,
    MatCard,
    MatFormField,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButton,
    RouterLink,
  ],
})
export class AuthComponent {

  email = '';
  password = '';
  error = '';

  constructor(private readonly authService: AuthService, private router: Router) {
  }

  auth(email: string, password: string) {
    this.authService.auth(email, password).subscribe({
      next: (data) => {
        localStorage.setItem('token', data);
        this.router.navigate(['/home']);
      }, error: (error) => {
        if(error.status === 401) {
          this.error = 'Dados inválidos';
        }
      }
    })
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  @Output() submitEM = new EventEmitter();
}
