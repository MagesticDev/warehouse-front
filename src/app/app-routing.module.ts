import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forRoot([
                { path: '', redirectTo: '/Home',  pathMatch: 'full'},
                { path: 'Home',  loadChildren: () => import('./components/pages/home/app-home.module').then(m => m.HomeModule) },
                { path: 'Contact', loadChildren: () => import('./components/pages/contact/app-contact.module').then(m => m.ContactModule) },
            ], 
            { enableTracing: false }
        ),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { } 
