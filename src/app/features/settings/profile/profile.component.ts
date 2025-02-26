import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from '@services/common/local-storage.service';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup = this.fb.group({
    firstName: ['Samuel'],
    lastName: ['Gyimah'],
    email: ['sk.gyimah@andurar.com'],
    twoFactor: [false],
    emailNotifications: [true],
  });

  constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    const user = this.localStorageService.getItem('user');
    if (user) {
      this.profileForm.patchValue(user);
    }
  }
}
