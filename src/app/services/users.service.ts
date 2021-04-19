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
  //baseUrl = 'http://localhost:5000/api/';

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'admin/users');
  }

  insertUser(newUser: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'user', newUser);
  }

  updateUser(editUser: User): Observable<User> {
    console.log('user service');
    console.log(editUser);
    console.log('***');
    return this.http.put<User>(this.baseUrl + 'user', editUser, {
      responseType: 'json',
    });
  }

  removeUser(user_id: string): Observable<string> {
    return this.http.delete<string>(this.baseUrl + 'user/' + user_id);
  }
}
