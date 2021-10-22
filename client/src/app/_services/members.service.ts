import { IMember } from './../_models/member';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMembers() {
    return this.http.get<IMember[]>(`${this.baseUrl}users`);
  }

  getMember(username: string) {
    return this.http.get<IMember>(`${this.baseUrl}users/${username}`);
  }
}
