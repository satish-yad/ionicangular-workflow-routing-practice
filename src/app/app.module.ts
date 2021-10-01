import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { UserlistComponent } from './userlist/userlist.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { Component, ViewContainerRef, ComponentFactoryResolver} from '@angular/core'
console.warn("lazy Module");
console.warn("lazy-user Module")

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AdminlistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
