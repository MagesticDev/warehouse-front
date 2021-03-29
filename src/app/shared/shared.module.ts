import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgxLoadingModule } from 'ngx-loading';
import { AppRoutingModule } from '../app-routing.module';
import { HttpLoaderFactory } from '../app.module';
import { AppLoadingComponent } from '../components/main/app-loading/app-loading.component';
import { AppAlertComponent } from './components/app-alert/app-alert.component';
import { AppAvatarComponent } from './components/app-avatar/app-avatar.component';
import { AppLoginComponent } from './components/app-login/app-login.component';
import { AppPopupAlertComponent } from './components/app-popup-alert/app-popup-alert.component';
import { AppUploadComponent } from './components/app-upload/app-upload.component';
import { AppWysiwygComponent } from './components/app-wysiwyg/app-wysiwyg.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AppTchatComponent } from './components/app-tchat/app-tchat.component';
import { LocalizedDatePipe } from './components/date/date.component';
import localeFr from '@angular/common/locales/fr';
import { AppErrorComponent } from './components/app-error/app-error.component';
import { AppModalsComponent } from './components/app-modal/app-modals.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppDragAndDropListComponent } from './components/app-drag-and-drop/app-drag-and-drop-list.component';

registerLocaleData(localeFr);

const APP_COMPONENTS = [
  AppAlertComponent,
  AppLoginComponent,
  AppPopupAlertComponent,
  AppLoadingComponent,
  AppUploadComponent,
  AppAvatarComponent,
  AppWysiwygComponent,
  AppTchatComponent,
  AppErrorComponent,
  AppModalsComponent,
  AppDragAndDropListComponent,
  LocalizedDatePipe
];
const APP_SHARED = [...APP_COMPONENTS];

@NgModule({
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    AppRoutingModule, 
    HttpClientModule, 
    CommonModule, 
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    NgxLoadingModule,
    CKEditorModule,
    DragDropModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient] 
      }
    })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  declarations: [...APP_SHARED],
  exports: [...APP_SHARED]
})
export class SharedModule {

}
