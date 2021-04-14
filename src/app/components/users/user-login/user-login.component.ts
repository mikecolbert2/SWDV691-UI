import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../../../service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  user: any = [];

  email?: string;
  password?: string;

  constructor(
    private usersService: UsersService,
    public http: HttpClient,
    public router: Router
  ) {}

  ngOnInit(): void {}

  userLogin() {
    const user = {
      email: this.email,
      password: this.password,
    };

    console.log('inside userLogin');
    console.log(user.email);

    //this.usersService.registerUser.emit(user);
    this.usersService.userSignIn(user);
    //this.router.navigate(['about']);
  }

  userLogout() {
    this.usersService.userSignOut();
    //this.router.navigate(['about']);
  }
}
