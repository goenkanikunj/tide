import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
// Angular material modules
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { TideRoutingModule } from './tide-routing.module';
import { EventsComponent } from './events/events.component';
import { TeamComponent } from './team/team.component';
import { ContentsComponent } from './contents/contents.component';
import { HomeComponent } from './home/home.component';

import { MatchesCategoryPipe, MatchesCompletionPipe } from './../common/event.pipe';
import { RegisterEventComponent } from './register-event/register-event.component';
import { EventsListComponent } from './events-list/events-list.component';
import { AddEventComponent } from './add-event/add-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { TideAppService } from '../services/tide-app.service';
import { TideAppMockService } from '../services/tide-app-mock.service';
import { HttpConfigInterceptor } from '../common/httpconfig.interceptor';
import { MatToolbarModule, MatMenuModule, MatInputModule, MatFormFieldModule, MatTableModule, MatCheckboxModule } from '@angular/material';
@NgModule({
  declarations: [
    EventsComponent,
    TeamComponent,
    ContentsComponent,
    HomeComponent,

    RegisterEventComponent,
    EventsListComponent,
    AddEventComponent,
    UpdateEventComponent,
    DeleteEventComponent,

    MatchesCategoryPipe,
    MatchesCompletionPipe,
    RegistrationListComponent

  ],
  imports: [

    HttpClientModule,
    CommonModule,
    TideRoutingModule,

    FlexLayoutModule,
    // Angular Material components
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatCheckboxModule
  ],
  providers: [
    { provide: TideAppService, useClass: TideAppMockService },
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
})
export class TideModule { }
