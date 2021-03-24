import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/components/guard/auth.guard';
// import { AuthGuardService } from 'src/app/core/services/authGuard.service';
import { AccountComponent } from './app-account.component';
import { AccountIndexComponent } from './index/app-account-index.component';
import { AccountRegisterComponent } from './register/app-register.component';
import { AccountSignInComponent } from './sign-in/app-sign-in.component';
import { AccountRecoveryComponent } from './recovery/app-recovery.component';
export const ACCOUNT_ROUTE: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { 
        path: 'Account', 
        component: AccountIndexComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'Signin', 
        component: AccountSignInComponent, 
      },
      {
        path: 'Register', 
        component: AccountRegisterComponent, 
      },
      {
        path: 'Recovery', 
        component: AccountRecoveryComponent, 
      },
      {
        path: 'Recovery/:restorePassword', 
        component: AccountRecoveryComponent, 
      }
    ]
  }
];