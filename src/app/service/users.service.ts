import { Injectable, NgModule } from '@angular/core';
//import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
//import { UsersRoutingModule } from '../components/admin/user-manager/admin-routing.module';
import { Subject } from 'rxjs';

import { User } from '../models/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // private userSubject: BehaviorSubject<User>;
  // public user: Observable<User>;

  apiUrl: string = 'https://swdv691-services.herokuapp.com/api';
  users: any = [];

  dataChanged$: Observable<boolean>;
  private dataChangeSubject: Subject<boolean>;

  constructor(public http: HttpClient, public router: Router) {
    console.log('hello user service');
    // this.userSubject = new BehaviorSubject<User>(
    //   JSON.parse(localStorage.getItem('user') || '{}')
    // );
    // this.user = this.userSubject.asObservable();

    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangeSubject.asObservable();
  }

  // public get userValue(): User {
  //   return this.userSubject.value;
  // }

  // Get users
  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + `/admin/users`);
  }

  // remove user
  removeUser(user_id: string) {
    let url = this.apiUrl + '/user/';
    return this.http
      .delete(url + user_id)
      .pipe
      // map((x) => {
      //   // auto logout if the logged in user deleted their own record
      //   // if (user_id == this.userValue.user_id) {
      //   //   this.logout();
      //   }
      //   return x;
      // })
      ();
  }

  // Register User
  newUser(user: any) {
    console.log(' user service ... adding user ');
    console.log(user);
    let url = this.apiUrl + '/user';

    //return this.http.post<User>(url, user, httpOptions);
    this.http.post(url, user).subscribe((res) => {
      //this.users = res;
      //this.dataChangeSubject.next(true);
      this.router.navigate(['admin/user-manager']);

      // TODO: redirect to login page
    });
  }

  // // Delete user
  // removeUser(user_id: string) {
  //   let url = this.apiUrl + '/user/';
  //   return this.http.delete(url + user_id).pipe(
  //     map((x) => {
  //       // auto logout if the logged in user deleted their own record
  //       if (user_id == this.userValue.user_id) {
  //         this.logout();
  //       }
  //       return x;
  //     })
  //   );
  // }

  // Get single user
  getById(user_id: string) {
    console.log(' user service ... getting single user ');
    let url = this.apiUrl + '/user/';
    console.log(url + user_id);
    this.users = this.http.get(url + user_id);
    console.log(this.users);
    return this.users;
  }

  // Update user
  // updateUser(users: User): void {
  //   console.log(' user service ... updating user ');
  //   console.log(users);
  //   let url = this.apiUrl + '/user/';
  //   this.http.put(url + this.users.user_id, users).subscribe((res) => {
  //     this.router.navigate(['admin/user-manager']);
  //   });
  // }

  editUser(user: any) {
    console.log('Editing user:', user);
    this.http
      .put(this.apiUrl + '/user/' + user.user_id, user)
      .subscribe((res) => {
        this.users = res;
        this.dataChangeSubject.next(true);
      });
  }
  login(username: string, password: string) {
    // let url = this.apiUrl + '/user/login';
    // return this.http
    //   .post<User>(url, { username, password })
    //   .pipe(
    //     map((user) => {
    //       // store user details and jwt token in local storage to keep user logged in between page refreshes
    //       localStorage.setItem('user', JSON.stringify(user));
    //       this.userSubject.next(user);
    //       return user;
    //     })
    //   );
  }

  logout() {
    // // remove user from local storage and set current user to null
    // localStorage.removeItem('user');
    // this.userSubject.next(null as any);
    // this.router.navigate(['/account/login']);
  }
}
