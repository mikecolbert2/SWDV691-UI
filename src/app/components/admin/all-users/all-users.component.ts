import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {
  users: User[] | undefined;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((response: User[]) => {
      this.users = response;
    });
  }
}
