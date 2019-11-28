import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchitectureCenterRoutingModule } from './architecture-center-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ArchitectureCenterRoutingModule
  ]
})
export class ArchitectureCenterModule { }
