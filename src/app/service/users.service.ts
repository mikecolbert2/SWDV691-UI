import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { map, catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/User';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
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
  users: any = [];
  dataChanged$: Observable<boolean>;
  private dataChangeSubject: Subject<boolean>;

  constructor(public http:HttpClient) { 
    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangeSubject.asObservable();
  }

  // Get users
  getAllUsers():Observable<object[]> {
   let url = this.apiUrl + "/admin/users"
   console.log(url)
   return this.http.get<User[]>(url);
  }

 
 // Register User
  newUser(user:User) {
    console.log(' user service ... adding user ')
    console.log(user)
    let url = this.apiUrl + "/user"
  
    //return this.http.post<User>(url, user, httpOptions);
    this.http.post(url, user).subscribe(res => {
      this.users = res;
      this.dataChangeSubject.next(true); 
    
      // TODO: redirect to login page
    });
  }

  // Delete user
    removeUser(user_id:any){
      console.log(' user service ... deleting user ')
      let url = this.apiUrl + "/user/"
      this.http.delete(url + user_id).subscribe(res => {
        this.users = res;
        this.dataChangeSubject.next(true);

    // TODO: redirect to user-manager page
      })
    }



}
