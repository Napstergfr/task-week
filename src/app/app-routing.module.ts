import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeekdaysComponent} from './weekdays/weekdays.component';

const routes: Routes = [
  {
    path: '',
    component: WeekdaysComponent
  },
  {
    path: '**',
    component: WeekdaysComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
