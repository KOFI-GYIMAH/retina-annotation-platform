import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { LocalStorageService } from '@services/common/local-storage.service';
import type { User } from '@shared/models';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SettingsComponent } from '../../features/settings/settings.component';

@Component({
  selector: 'app-dashboard-layout',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    DialogModule,
    ButtonModule,
    SettingsComponent,
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
})
export class DashboardLayoutComponent implements OnInit {
  sidebarOpen: boolean = false;
  showSettingsModal: boolean = false;
  items: MenuItem[] | undefined;
  activeRouteTitle: string = 'Dashboard';

  user!: User;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const user = this.localStorageService.getItem('user');
    if (user) this.user = user;
  }
}
