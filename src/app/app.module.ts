import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Angular material modules
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { ErrorDialogComponent } from './common/error-dialog/error-dialog.component';
import { ErrorDialogService } from './common/error-dialog/errordialog.service';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule,

    FontAwesomeModule,
    // Angular Material components
    MatGridListModule, MatCardModule,
    MatIconModule, MatButtonModule,
    MatMenuModule, MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,

    FlexLayoutModule,

    CommonModule,
    BrowserAnimationsModule, // required animations module
  ],

  declarations: [
    AppComponent,
    NavMenuComponent,
    ErrorDialogComponent
  ],
  providers: [
    ErrorDialogService,
  ],

  bootstrap: [AppComponent],
  entryComponents: [ErrorDialogComponent]
})

export class AppModule {
  constructor() {

  }
}
