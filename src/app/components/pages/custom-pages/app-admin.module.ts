import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ADMIN_ROUTE } from './app-admin.route';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
import { AdminComponent } from './app-admin.component';
import { AdminIndexComponent } from './index/app-admin-index.component';

// import { AuthGuardService } from 'src/app/core/services/authGuard.service';


@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    RouterModule.forRoot(ADMIN_ROUTE, { preloadingStrategy: PreloadAllModules }), 
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
  declarations: [AdminComponent, AdminIndexComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdminModule {} 