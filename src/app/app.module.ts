import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA, Injectable } from '@angular/core';
import { NgxLoadingModule } from 'ngx-loading';
import { AppComponent } from './app.component';
import { AppAsideComponent } from './components/main/app-aside/app-aside.component';
import { AppFooterComponent } from './components/main/app-footer/app-footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http'; 
import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHeaderComponent } from './components/main/app-header/app-header.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ForumModule } from './components/pages/forum/app-forum.module';
import { RouterModule } from '@angular/router';
import { ErrorsModule } from './components/pages/errors/app-errors.module';
import { AccountModule } from './components/pages/account/app-account.module';
import { ACCOUNT_ROUTE } from './components/pages/account/app-account.route';
import { SharedModule } from './shared';
import { IonicStorageModule } from '@ionic/storage';
import { AuthInterceptor } from './shared/components/auths/authconfig.interceptor';
import { HttpErrorInterceptor } from './shared/components/app-interceptor/app-intercaptor.component';
import { AdminModule } from './components/pages/_admin/app-admin.module';



export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@Injectable({
  providedIn: 'root'  // <--provides this service in the root ModuleInjector
})
@NgModule({
  imports: [
    RouterModule.forChild(ACCOUNT_ROUTE),
    BrowserModule, 
    BrowserAnimationsModule, 
    AppRoutingModule, 
    HttpClientModule, 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    ForumModule,
    AccountModule,
    AdminModule,
    ErrorsModule,
    SharedModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient] 
      }
    })
  ],
  declarations: [
    AppComponent,
    AppAsideComponent,
    AppFooterComponent,
    AppHeaderComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [{
    // provide: [LOCALE_ID, HTTP_INTERCEPTORS],
    provide: HTTP_INTERCEPTORS, 
    useValue: 'fr', 
    useClass: AuthInterceptor,
    multi: true
  }, {
     provide: HTTP_INTERCEPTORS, 
     useValue: 'fr',
     useClass: HttpErrorInterceptor,
     multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
