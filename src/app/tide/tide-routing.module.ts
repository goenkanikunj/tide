import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { TeamComponent } from './team/team.component';
import { ContentsComponent } from './contents/contents.component';
import { HomeComponent } from './home/home.component';
import { RegisterEventComponent } from './register-event/register-event.component';
import { EventsListComponent } from './events-list/events-list.component';
import { AddEventComponent } from './add-event/add-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'team',
    component: TeamComponent,
    pathMatch: 'full'
  },
  {
    path: 'contents',
    component: ContentsComponent,
    pathMatch: 'full'
  },

  {
    path: 'events/view',
    component: EventsComponent,
    pathMatch: 'full'
  },
  {
    path: 'events/registration',
    component: RegisterEventComponent,
    pathMatch: 'full'
  },
  {
    path: 'events/registration-list',
    component: RegistrationListComponent,
    pathMatch: 'full'
  },
  {
    path: 'events/lists',
    component: EventsListComponent,
    pathMatch: 'full'
  },
  {
      path: 'events/add',
      component: AddEventComponent,
      pathMatch: 'full'
  },
  {
      path: 'events/update',
      component: UpdateEventComponent,
      pathMatch: 'full'
  },
  {
      path: 'events/delete',
      component: DeleteEventComponent,
      pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TideRoutingModule { }
