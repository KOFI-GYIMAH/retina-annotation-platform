import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  profileForm: FormGroup = this.fb.group({
    firstName: ['Samuel'],
    lastName: ['Gyimah'],
    email: ['sk.gyimah@andurar.com'],
    twoFactor: [false],
    emailNotifications: [true],
  });

  constructor(private fb: FormBuilder) {}
}
