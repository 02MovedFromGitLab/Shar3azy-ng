import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../mod-authentication/components/login/login.component';
import { HomeComponent } from '../public/home.component';
import { ProfileComponent } from '../mod-authentication/components/profile/profile.component';
import { BoardCustomerComponent } from '../customer/board-customer.component';
import { BoardOwnerComponent } from '../owner/board-owner.component';
import { BoardAdminComponent } from '../admin/board-admin.component';
import {RegisterComponent} from '../mod-authentication/components/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'customer', component: BoardCustomerComponent },
  { path: 'owner', component: BoardOwnerComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'public', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
