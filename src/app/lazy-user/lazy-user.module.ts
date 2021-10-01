import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyUserRoutingModule } from './lazy-user-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [LoginComponent, ListComponent],
  imports: [
    CommonModule,
    LazyUserRoutingModule
  ]
})
export class LazyUserModule { }
