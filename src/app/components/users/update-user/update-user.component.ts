import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../service/users.service';
import { User } from '../../../models/User';
import { first } from 'rxjs/operators';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  users: any = [];

  user_id: string = '';
  first_name: string = '';
  last_name: string = '';
  email?: string;
  password?: string;
  password2?: string;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute // private router: Router
  ) {}

  ngOnInit(): void {
    //this.getUser(this.route.snapshot.params['user_id']);

    this.userService
      .getById(this.route.snapshot.params['user_id'])
      .subscribe((response: any) => {
        this.users = response;
      });
  }

  // getUser(user_id: string): void {
  //   let user = this.userService.getById(user_id).subscribe((users: User[]) => {
  //     this.users = users;
  //   });
  // }

  updateUser(user: any): void {
    const updated_user = {
      user_id: this.user_id,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      password2: this.password2,
    };
    console.log('inside update User');
    console.log(updated_user);

    //this.usersService.registerUser.emit(user);
    this.userService.editUser(user);
  }
}
