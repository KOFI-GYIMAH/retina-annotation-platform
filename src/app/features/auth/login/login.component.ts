import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { HotToastService } from '@ngxpert/hot-toast';
import { AuthService } from '@services/api/auth.service';
import { LocalStorageService } from '@services/common/local-storage.service';
import { loadUserRecordSuccess } from '@store/user';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    InputTextModule,
    PasswordModule,
    ButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loading: boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private store: Store,
    private toast: HotToastService
  ) {}

  onSubmit() {
    if (this.loginForm.invalid) return;
    this.loading = true;

    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.loading = false;
        this.localStorageService.setItem('token', res.data.accessToken);
        this.localStorageService.setItem('user', res.data);

        this.store.dispatch(loadUserRecordSuccess({ user: res.data }));

        this.toast.success('Login successful!!');
        this.router.navigate(['/datasets']);
      },
      error: (err) => {
        this.loading = false;
        this.toast.error('Invalid email or password!');
      },
    });
  }
}
