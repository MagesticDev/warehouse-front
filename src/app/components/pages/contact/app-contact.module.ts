import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NEWS_ROUTE } from './app-contact.route';
import { ContactComponent } from './app-contact.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [RouterModule.forChild(NEWS_ROUTE), CommonModule],
  declarations: [ContactComponent]
})
export class ContactModule {} 