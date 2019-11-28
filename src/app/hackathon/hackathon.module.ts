import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HackathonRoutingModule } from './hackathon-routing.module';

import { HomeComponent } from './home/home.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';

@NgModule({
  declarations: [HomeComponent, EventDetailComponent, EventRegistrationComponent],
  imports: [
    CommonModule,
    HackathonRoutingModule
  ]
})
export class HackathonModule { }
