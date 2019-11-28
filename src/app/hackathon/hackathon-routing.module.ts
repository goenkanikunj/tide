import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'event-detail',
    component: EventDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'event-registration',
    component: EventRegistrationComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HackathonRoutingModule { }
