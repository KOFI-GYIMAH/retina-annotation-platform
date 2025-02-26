import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { HotToastService } from '@ngxpert/hot-toast';
import { AuthService } from '@services/api/auth.service';
import type { WorkspaceMembers } from '@shared/models';
import { loadWorkspaceMembers } from '@store/workspace/workspace.actions';
import { selectWorkspaceMembers } from '@store/workspace/workspace.selectors';

interface Member {
  id: number;
  name: string;
  email: string;
  role: 'Owner' | 'Admin' | 'User' | 'Ophthalmologist';
  initials: string;
}

@Component({
  selector: 'app-members',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css',
})
export class MembersComponent implements OnInit {
  workforceMembers: WorkspaceMembers[] = [];
  sendingInvite = false;

  sendInviteForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('Admin', [Validators.required]),
  });

  activeTab: 'All Members' | 'Owner' | 'Admin' | 'User' | 'ophthalmologist' =
    'All Members';
  members: Member[] = [
    {
      id: 1,
      name: 'Samuel Gyimah',
      email: 'sg.gyimah@andurar.com',
      role: 'Owner',
      initials: 'SG',
    },
    {
      id: 2,
      name: 'Andurar',
      email: 'info@andurar.com',
      role: 'Admin',
      initials: 'A',
    },
  ];

  constructor(
    private authService: AuthService,
    private toast: HotToastService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadWorkspaceMembers());
    this.store.select(selectWorkspaceMembers).subscribe((members) => {
      this.workforceMembers = members;
    });
  }

  setActiveTab(
    tab: 'All Members' | 'Owner' | 'Admin' | 'User' | 'ophthalmologist'
  ): void {
    this.activeTab = tab;
  }

  getFilteredMembers(): Member[] {
    if (this.activeTab === 'All Members') {
      return this.members;
    } else {
      return this.members.filter((member) => member.role === this.activeTab);
    }
  }

  sendInvite(): void {
    console.log(this.sendInviteForm.value);
    if (this.sendInviteForm.invalid) return;
    this.sendingInvite = true;

    this.authService.sendInvite(this.sendInviteForm.value).subscribe({
      next: (res) => {
        this.sendingInvite = false;
        this.store.dispatch(loadWorkspaceMembers());
        this.toast.success('Invite sent successfully');
        console.log(res);
      },
      error: (err) => {
        this.sendingInvite = false;
        this.toast.error('Something went wrong');
        console.log(err);
      },
    });
  }
}
