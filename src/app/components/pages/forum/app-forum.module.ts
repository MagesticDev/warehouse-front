import { CUSTOM_ELEMENTS_SCHEMA, Injectable, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { FORUM_ROUTE } from './app-forum.route';
import { ForumIndexComponent } from './index/app-forum-index.component';
import { CommonModule } from '@angular/common';
import { ForumSectionComponent } from './section/app-forum-section.component';
import { ForumSubjectComponent } from './subject/app-forum.subject.component';
import { ForumComponent } from './app-forum.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppBreadcrumbComponent } from '../../main/app-bread-crumbs/app-bread-crumbs.component';
import { AppLoadingComponent } from '../../main/app-loading/app-loading.component';
import { NgxLoadingModule } from 'ngx-loading';
import { SharedModule } from 'src/app/shared';
import { ForumEditComponent } from './actions/edit/app-forum-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    RouterModule.forRoot(FORUM_ROUTE, { preloadingStrategy: PreloadAllModules }), 
    CommonModule, 
    NgxLoadingModule, 
    SharedModule
  ],
  declarations: [AppBreadcrumbComponent, ForumComponent, ForumIndexComponent, ForumSectionComponent, ForumSubjectComponent, ForumEditComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ForumModule {} 