import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private URL = 'https://reqres.in/api';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get(`${this.URL}/users`)
      .pipe(map((response: any) => response['data']));
  }
}