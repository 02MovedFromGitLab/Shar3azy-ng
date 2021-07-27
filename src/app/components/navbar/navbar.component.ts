import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../authentication/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
private roles: string[] = [];
isLoggedIn = false;
showAdminView = false;
showOwnerView = false;
username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminView = this.roles.includes('ROLE_ADMIN');
      this.showOwnerView = this.roles.includes('ROLE_OWNER');
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
