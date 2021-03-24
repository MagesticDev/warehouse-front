import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NEWS_ROUTE } from './app-home.route';
import { HomeComponent } from './app-home.component';
import { CommonModule } from '@angular/common';
import { AppSliderComponent } from '../../main/app-slider/app-slider.component';



@NgModule({
  imports: [RouterModule.forChild(NEWS_ROUTE), CommonModule],
  declarations: [HomeComponent, AppSliderComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class HomeModule {} 