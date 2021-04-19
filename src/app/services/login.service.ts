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
  current_user: string = '';
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
        map((user) => {
          if (user) {
            this.current_user = user.email;
            this.logged_in_user = user;
          }
          return user;
        })
      );
  }

  public Logout() {
    this.current_user = '';
  }
}
