import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {
  users: User[] = [];
  editUser: User = new User();
  editIndex: number = 0;
  // deleteUser: User = new User();
  // deleteIndex: number = 0;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((response: User[]) => {
      this.users = response;
    });
  }

  onDetailsClick(event: any, index: number) {
    this.editUser.user_id = this.users[index].user_id;
    this.editUser.first_name = this.users[index].first_name;
    this.editUser.last_name = this.users[index].last_name;
    this.editUser.email = this.users[index].email;
    this.editUser.role_name = this.users[index].role_name;
    this.editUser.password = this.users[index].password;
    this.editUser.password2 = this.users[index].password2;
    this.editUser.date_created = this.users[index].date_created;
    this.editUser.last_login = this.users[index].last_login;
    this.editIndex = index;
  }

  onUpdateClick() {
    this.usersService.updateUser(this.editUser).subscribe(
      (response: User) => {
        console.log(response);
        console.log(response.first_name);
        var u: User = new User();
        u.user_id = response.user_id;
        u.first_name = response.first_name;
        u.last_name = response.last_name;
        u.email = response.email;
        u.password = response.password;
        u.date_created = response.date_created;
        u.last_login = response.last_login;
        this.users[this.editIndex] = u;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onDeleteClick() {
    console.log(this.editUser.user_id);
    this.usersService.removeUser(this.editUser.user_id).subscribe(
      (response) => {
        console.log(this.editIndex);
        this.users.splice(this.editIndex, 1); //update the users array with this user detail from response
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
