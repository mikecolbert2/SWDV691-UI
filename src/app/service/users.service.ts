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
   return this.http.get<User[]>(url);
  }

 // Register User
  registerUser(user:User):Observable<User> {

    // this never displays in the console
    console.log('inside register user')
    
    let url = this.apiUrl + "/user/register"
    return this.http.post<User>(url, user, httpOptions);
  }




}
