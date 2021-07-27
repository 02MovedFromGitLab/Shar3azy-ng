import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routes/app-routing.module';
import {AuthenticationModule} from './mod-authentication/authentication.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './public/home.component';
import { BoardAdminComponent } from './admin/board-admin.component';
import { BoardOwnerComponent } from './owner/board-owner.component';
import { BoardCustomerComponent } from './customer/board-customer.component';


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
