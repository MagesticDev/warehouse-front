import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NEWS_ROUTE } from './app-errors.route';
import { NotFoundComponent } from './404/app-404.component';
import { CommonModule } from '@angular/common';
import { DeniedAccessComponent } from './403/app-403.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';




@NgModule({
  imports: [
    RouterModule.forChild(NEWS_ROUTE), 
    CommonModule, 
    TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
    })
  ],
  declarations: [NotFoundComponent, DeniedAccessComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [{provide: LOCALE_ID, useValue: 'fr' }],
})
export class ErrorsModule {} 