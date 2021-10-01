import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../users/login/login.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
path: "users" , children:[
  {path: 'login' , component:LoginComponent},
  {path: 'list' , component:ListComponent}
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
