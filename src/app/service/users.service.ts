import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl:string = 'https://swdv691-services.herokuapp.com/api';
  

  constructor(private http:HttpClient) { }

  // Get Tasks
  getAllUsers():Observable<User[]> {
   let url = this.apiUrl + "/admin/users"
   console.log(url)
   return this.http.get<User[]>(`${this.apiUrl}` + "/admin/users");
  }

  // Register User
  registerUser(user:User):Observable<User> {
    console.log(user)
    return this.http.post<User>(this.apiUrl, user, httpOptions);
  }


}
