import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from '@services/common/local-storage.service';
import type { User } from '@shared/models';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  user: User = {} as User;

  profileForm: FormGroup = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
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
      this.user = user;
    }
  }
}
