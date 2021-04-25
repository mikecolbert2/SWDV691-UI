import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginViewModel } from '../models/login-view-model';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://swdv691-services.herokuapp.com/api/';
  //baseUrl = 'http://localhost:5000/api/';

  current_user: User = new User();
  user_role: string = '';
  user_email: string = '';
  logged_in_user: User = new User();

  public Login(loginViewModel: LoginViewModel): Observable<any> {
    console.log('inside the login service');
    console.log(loginViewModel);
    console.log(' ******** ');
    return this.http
      .post<any>(this.baseUrl + 'login', loginViewModel, {
        responseType: 'json',
      })
      .pipe(
        map((current_user) => {
          if (current_user) {
            console.log('current user:  ');
            console.log(current_user);
            console.log('email: ' + current_user.current_user.email);

            sessionStorage.setItem(
              'user_email',
              JSON.stringify(current_user.current_user.email)
            );
            sessionStorage.setItem(
              'user_id',
              JSON.stringify(current_user.current_user.user_id)
            );
            sessionStorage.setItem(
              'user_role',
              JSON.stringify(current_user.current_user.role_name)
            );
          }
          return current_user;
        })
      );
  }

  public Logout() {
    sessionStorage.removeItem('user_email');
    sessionStorage.removeItem('user_id');
    sessionStorage.removeItem('user_role');
    console.log('removed from session storage');
  }
}
