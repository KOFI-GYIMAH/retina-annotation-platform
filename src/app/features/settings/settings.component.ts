import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '@services/common/local-storage.service';
import { resetUserState } from '@store/user';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MembersComponent } from './members/members.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkspaceComponent } from './workspace/workspace.component';

@Component({
  selector: 'app-settings',
  imports: [
    ButtonModule,
    InputTextModule,
    FormsModule,
    CommonModule,
    MembersComponent,
    ProfileComponent,
    WorkspaceComponent,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  activeTab: string = 'members';

  constructor(
    private store: Store,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  logout() {
    this.store.dispatch(resetUserState());
    this.localStorageService.clear();
    this.router.navigate(['/']);
  }
}
