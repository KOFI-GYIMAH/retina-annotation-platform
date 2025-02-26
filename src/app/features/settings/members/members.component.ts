import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HotToastService } from '@ngxpert/hot-toast';
import { AuthService } from '@services/api/auth.service';

interface Member {
  id: number;
  name: string;
  email: string;
  role: 'Owner' | 'Admin' | 'User' | 'Ophthalmologist';
  initials: string;
}

@Component({
  selector: 'app-members',
  imports: [CommonModule, FormsModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css',
})
export class MembersComponent {
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
  newMemberRole: 'Owner' | 'Admin' | 'User' | 'ophthalmologist' | 'Worker' =
    'Admin';

  constructor(
    private authService: AuthService,
    private toast: HotToastService
  ) {}

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

  sendInvite(email: string): void {
    const payload = {
      email,
      role: this.newMemberRole,
    };
    console.log(payload);
    if (email && this.newMemberRole) {
      this.authService.sendInvite(payload).subscribe({
        next: (res) => {
          this.toast.success('Invite sent successfully');
          console.log(res);
        },
        error: (err) => {
          this.toast.error('Something went wrong');
          console.log(err);
        },
      });
    }
  }
}
