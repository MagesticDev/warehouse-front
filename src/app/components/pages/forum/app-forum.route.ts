import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/components/guard/auth.guard';
import { ForumEditComponent } from './actions/edit/app-forum-edit.component';
import { ForumComponent } from './app-forum.component';
import { ForumIndexComponent } from './index/app-forum-index.component';
import { ForumSectionComponent } from './section/app-forum-section.component';
import { ForumSubjectComponent } from './subject/app-forum.subject.component';




export const FORUM_ROUTE: Routes = [
  {
    path: '',
    component: ForumComponent,
    data: { breadcrumbs: '' },
    children: [
      { 
        path: 'Forum', 
        component: ForumIndexComponent, 
        data: { breadcrumbItem: { key: 'Forum', labelName: 'Index des Forums' } }
      }, { 
        path: 'Forum/:name/:id', 
        component: ForumSectionComponent, 
        data: { breadcrumbItem: { key: 'Section', labelName: 'Section' } }
      }, {
        path: 'Forum/:name/:id/:name/:idSubject', 
        component: ForumSubjectComponent, 
        data: { breadcrumbItem: { key: 'Sujet', labelName: 'Sujet' } }
      }, {
        path: 'Forum/:name/:id/:name/:idSubject/edit/:idResponse', 
        component: ForumEditComponent,
        canActivate: [AuthGuard], 
        data: { breadcrumbItem: { key: 'Sujet', labelName: 'Editer' } }
      }
    ]
  }
];