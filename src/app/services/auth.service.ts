import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  signup(body: any) {
    return this.http.post(this.url + 'signup', body);
  }

  login(body: any) {
    return this.http.post(this.url + 'login', body);
  }
}
