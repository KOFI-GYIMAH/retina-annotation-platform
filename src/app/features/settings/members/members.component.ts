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
import { UserService } from '@services/api/user.service';
import type { WorkspaceMembers } from '@shared/models';
import { loadWorkspaceMembers } from '@store/workspace/workspace.actions';
import { selectWorkspaceMembers } from '@store/workspace/workspace.selectors';

@Component({
  selector: 'app-members',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css',
})
export class MembersComponent implements OnInit {
  workforceMembers: WorkspaceMembers[] = [];
  sendingInvite = false;

  workforceMembers$ = this.store.select(selectWorkspaceMembers);

  sendInviteForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('Admin', [Validators.required]),
  });

  activeTab: 'All Members' | 'Owner' | 'Admin' | 'Annotator' = 'All Members';

  constructor(
    private authService: AuthService,
    private toast: HotToastService,
    private store: Store,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadWorkspaceMembers());
    this.store.select(selectWorkspaceMembers).subscribe((members) => {
      this.workforceMembers = members;
      console.log(members);
    });
  }

  setActiveTab(tab: 'All Members' | 'Owner' | 'Admin' | 'Annotator'): void {
    this.activeTab = tab;
  }

  getFilteredMembers(): WorkspaceMembers[] {
    if (this.activeTab === 'All Members') {
      return this.workforceMembers;
    } else {
      return this.workforceMembers.filter(
        (member) => member.role.toLowerCase() === this.activeTab.toLowerCase()
      );
    }
  }

  sendInvite(): void {
    if (this.sendInviteForm.invalid) return;
    this.sendingInvite = true;

    this.authService.sendInvite(this.sendInviteForm.value).subscribe({
      next: (res) => {
        this.sendingInvite = false;
        this.store.dispatch(loadWorkspaceMembers());
        this.toast.success('Invite sent successfully');
        this.sendInviteForm.reset();
      },
      error: (err) => {
        this.sendingInvite = false;
        this.toast.error('Something went wrong');
      },
    });
  }
}
