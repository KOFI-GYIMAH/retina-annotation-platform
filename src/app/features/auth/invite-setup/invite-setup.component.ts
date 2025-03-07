import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngxpert/hot-toast';
import { AuthService } from '@services/api/auth.service';
import { passwordMatchValidator } from '@utils/index';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-invite-setup',
  imports: [CommonModule, ReactiveFormsModule, PasswordModule, ToastModule],
  templateUrl: './invite-setup.component.html',
  styleUrl: './invite-setup.component.css',
})
export class InviteSetupComponent implements OnInit {
  token: string = '';
  loading: boolean = false;
  formSubmitted: boolean = false;
  termsAccepted: boolean = false;
  role: string = '';

  private passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  inviteSetupForm: FormGroup = new FormGroup(
    {
      firstName: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      lastName: new FormControl<string>('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      email: new FormControl<string>({ value: '', disabled: true }, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(this.passwordPattern),
      ]),
      confirm_password: new FormControl<string>('', Validators.required),
      termsAccepted: new FormControl<boolean>(false, [Validators.requiredTrue]),
    },
    { validators: passwordMatchValidator }
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private toast: HotToastService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.token = params['token'];
      if (this.token) {
        this.processInvitation(this.token);
      } else {
        this.handleInvalidInvitation('No invitation token found');
      }
    });
  }

  processInvitation(token: string) {
    this.loading = true;
    this.authService.getInviteInfo(token).subscribe({
      next: (response) => {
        if (response && response.data) {
          this.inviteSetupForm.patchValue({
            email: response.data.email,
          });
          this.role = response.data.role;
          // Store email in a way that will be included when form is submitted
          this.inviteSetupForm.get('email')?.enable();
        } else {
          this.handleInvalidInvitation('Invalid invitation data');
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching invite info:', error);
        this.handleInvalidInvitation('Error fetching invitation information');
        this.loading = false;
      },
    });
  }

  handleInvalidInvitation(message: string) {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }

  getFormControlError(controlName: string): string {
    const control = this.inviteSetupForm.get(controlName);
    if (
      control?.invalid &&
      (control?.dirty || control?.touched || this.formSubmitted)
    ) {
      if (control?.errors?.['required']) {
        return 'This field is required';
      }
      if (control?.errors?.['email']) {
        return 'Please enter a valid email address';
      }
      if (control?.errors?.['minlength']) {
        return `Minimum length is ${control?.errors?.['minlength'].requiredLength} characters`;
      }
      if (control?.errors?.['pattern'] && controlName === 'password') {
        return 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character';
      }
      if (control?.errors?.['passwordMismatch']) {
        return 'Passwords do not match';
      }
    }
    return '';
  }

  onSubmit() {
    if (!this.inviteSetupForm.valid) return;

    const payload = {
      ...this.inviteSetupForm.value,
      role: this.role,
    };

    this.authService.register(payload).subscribe({
      next: (response) => {
        this.toast.success('Account created successfully!');
        this.inviteSetupForm.reset();

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);

        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
      },
    });
  }
}
