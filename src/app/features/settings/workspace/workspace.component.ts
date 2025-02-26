import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-workspace',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.css',
})
export class WorkspaceComponent {
  workspaceForm: FormGroup = this.fb.group({
    name: ['ECL Retina Workspace'],
    lastName: ['Gyimah'],
    email: ['sk.gyimah@andurar.com'],
    twoFactor: [false],
    emailNotifications: [true],
  });

  constructor(private fb: FormBuilder) {}
}
