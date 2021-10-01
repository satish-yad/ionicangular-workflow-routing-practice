import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'lazy', loadChildren:()=>import('./lazy/lazy.module')
    .then(mod=>mod.LazyModule)
  },
  {
    path:'lazy-user', loadChildren:()=>import('./lazy-user/lazy-user.module')
    .then(mod=>mod.LazyUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
