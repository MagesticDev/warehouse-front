import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/components/guard/auth.guard';
import { AdminComponent } from './app-admin.component';
import { AdminIndexComponent } from './index/app-admin-index.component';
export const ADMIN_ROUTE: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { 
        path: 'Administration', 
        component: AdminIndexComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];