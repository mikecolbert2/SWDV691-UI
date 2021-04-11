import { Component, OnInit } from '@angular/core';
import { UsersRoutingModule } from '../../users/users-routing.module';
import { UsersService } from '../../../service/users.service';
import { User } from '../../../models/User';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-list-all-users',
  templateUrl: './list-all-users.component.html',
  styleUrls: ['./list-all-users.component.scss'],
})
export class ListAllUsersComponent implements OnInit {
  users: any = [];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService
      .getAllUsers()
      .pipe(first())
      .subscribe((users) => {
        this.users = users;
      });
  }

  deleteUser(user_id: string) {
    const user = this.users.find((x: any) => x.user_id === user_id);
    console.log(user);
    console.log('inside delete user');
    console.log(user_id);
    this.userService
      .removeUser(user_id)
      .pipe(first())
      .subscribe(
        () =>
          (this.users = this.users.filter((x: any) => x.user_id !== user_id))
      );
  }
}
