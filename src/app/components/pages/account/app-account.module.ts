import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AccountComponent } from './app-account.component';
import { AccountIndexComponent } from './index/app-account-index.component';
import { ACCOUNT_ROUTE } from './app-account.route';
import { AccountSignInComponent } from './sign-in/app-sign-in.component';
import { AccountRegisterComponent } from './register/app-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
import { NgxLoadingModule } from 'ngx-loading';
import { AppLoadingComponent } from '../../main/app-loading/app-loading.component';
import { AccountRecoveryComponent } from './recovery/app-recovery.component';
// import { AuthGuardService } from 'src/app/core/services/authGuard.service';


@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    RouterModule.forRoot(ACCOUNT_ROUTE, { preloadingStrategy: PreloadAllModules }), 
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient] 
      }
    })
  ],
  providers: [
    // AuthGuardService
  ],
  declarations: [AccountComponent, AccountIndexComponent, AccountSignInComponent, AccountRegisterComponent, AccountRecoveryComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AccountModule {} 