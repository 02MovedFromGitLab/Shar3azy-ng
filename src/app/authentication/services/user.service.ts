import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ShareClub} from '../../models/ShareClub.model';
import {map} from 'rxjs/operators';

const API_URL = 'http://localhost:8080/api/test/';
const API_MMAV1_URL = 'http://localhost:8080/api/mmav1/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getMemberBoard(): Observable<ShareClub> {
    return this.http.get<ShareClub>( API_MMAV1_URL + 'shareclub').pipe(
      map(response => response));
  }

  getManagerBoard(): Observable<any> {
    return this.http.get(API_URL + 'manager', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
