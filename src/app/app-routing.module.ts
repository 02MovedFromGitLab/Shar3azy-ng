import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './authentication/components/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './authentication/components/profile/profile.component';
import { BoardCustomerComponent } from './board-customer/board-customer.component';
import { BoardOwnerComponent } from './board-owner/board-owner.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {RegisterComponent} from './authentication/components/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'customer', component: BoardCustomerComponent },
  { path: 'owner', component: BoardOwnerComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
