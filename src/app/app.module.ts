import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routes/app-routing.module';
import {AuthenticationModule} from './authentication/authentication.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home.component';
import { BoardAdminComponent } from './components/admin/board-admin.component';
import { BoardOwnerComponent } from './components/owner/board-owner.component';
import { BoardCustomerComponent } from './components/customer/board-customer.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardOwnerComponent,
    BoardCustomerComponent,
    NavbarComponent
  ],
  imports: [
    AuthenticationModule,
    AppRoutingModule,
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
