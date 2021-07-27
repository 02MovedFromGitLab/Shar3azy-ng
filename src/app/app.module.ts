import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {AuthenticationModule} from './authentication/authentication.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardOwnerComponent } from './board-owner/board-owner.component';
import { BoardCustomerComponent } from './board-customer/board-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardOwnerComponent,
    BoardCustomerComponent
  ],
  imports: [
    AuthenticationModule,
    AppRoutingModule,
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
