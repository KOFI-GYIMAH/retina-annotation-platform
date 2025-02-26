import { Routes } from '@angular/router';

import { ClassesComponent } from './features/classes/classes.component';
import { ClassifyDatasetsComponent } from './features/classify-datasets/classify-datasets.component';
import { DatasetDetailsComponent } from './features/datasets/dataset-details/dataset-details.component';
import { DatasetComponent } from './features/datasets/dataset.component';

// * Layouts
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

// * Auth
import { ForgotPasswordComponent } from '@app/auth/forgot-password/forgot-password.component';
import { InviteSetupComponent } from '@app/auth/invite-setup/invite-setup.component';
import { LoginComponent } from './features/auth/login/login.component';

// * Guard
import { authGuard } from './core/guards/auth.guard';
import { noAuthGuard } from './core/guards/no-auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [noAuthGuard],
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'auth/login',
        component: LoginComponent,
      },
      {
        path: 'auth/forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'auth/invite-setup',
        component: InviteSetupComponent,
      },
    ],
  },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: 'classify',
        component: ClassifyDatasetsComponent,
      },
      {
        path: '',
        component: DashboardLayoutComponent,
        children: [
          { path: 'datasets', component: DatasetComponent },
          { path: 'datasets/:id', component: DatasetDetailsComponent },
          { path: 'classes', component: ClassesComponent },
        ],
      },
    ],
  },
];
