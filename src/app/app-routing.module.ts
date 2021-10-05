import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeekdaysComponent} from './weekdays/weekdays.component';

const routes: Routes = [
  {
    path: '',
    component: WeekdaysComponent
  }, //This is to load this component in the root path
  {
    path: '**',
    component: WeekdaysComponent
  } //This is to Showing the same component for any route path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
