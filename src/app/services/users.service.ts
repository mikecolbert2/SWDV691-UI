import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://swdv691-services.herokuapp.com/api/';

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'admin/users');
  }

  insertUser(newUser: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'user', newUser);
  }
}