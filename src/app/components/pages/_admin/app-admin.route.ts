import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/components/guard/auth.guard';
import { AdminComponent } from './app-admin.component';
import { AdminForumComponent } from './forum/app-admin-forum.component';
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
      },
      { 
        path: 'Administration/Forum', 
        component: AdminForumComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];