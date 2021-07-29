import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../authentication/components/login/login.component';
import { HomeComponent } from '../components/public/home.component';
import { ProfileComponent } from '../authentication/components/profile/profile.component';
import {RegisterComponent} from '../authentication/components/register/register.component';
import {BoardMemberComponent} from '../components/member/board-member.component';
import {BoardManagerComponent} from '../components/manager/board-manager.component';
import { BoardAdminComponent } from '../components/admin/board-admin.component';

const routes: Routes = [
  { path: 'all', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'member', component: BoardMemberComponent },
  { path: 'manager', component: BoardManagerComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'public', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
