import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routes/app-routing.module';
import {AuthenticationModule} from './authentication/authentication.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home.component';
import { BoardAdminComponent } from './components/admin/board-admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {BoardManagerComponent} from './components/manager/board-manager.component';
import {BoardMemberComponent} from './components/member/board-member.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardManagerComponent,
    BoardMemberComponent,
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
