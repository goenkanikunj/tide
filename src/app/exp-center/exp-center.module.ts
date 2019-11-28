import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpCenterRoutingModule } from './exp-center-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ExpCenterRoutingModule
  ]
})
export class ExpCenterModule { }
