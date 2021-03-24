import { Routes } from '@angular/router';
import { DeniedAccessComponent } from './403/app-403.component';
import { NotFoundComponent } from './404/app-404.component';


export const NEWS_ROUTE: Routes = [
  {
    path: '404',
    component: NotFoundComponent
  }, 
  {
    path: '403',
    component: DeniedAccessComponent
  }, 

];
