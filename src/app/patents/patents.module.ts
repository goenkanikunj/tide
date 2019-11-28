import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatentsRoutingModule } from './patents-routing.module';
import { HomeComponent } from './home/home.component';
import { PatentSubmissionComponent } from './patent-submission/patent-submission.component';

@NgModule({
  declarations: [HomeComponent, PatentSubmissionComponent],
  imports: [
    CommonModule,
    PatentsRoutingModule
  ]
})
export class PatentsModule { }
