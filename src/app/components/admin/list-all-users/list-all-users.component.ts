import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../service/users.service';

import { User } from '../../../models/User';

@Component({
  selector: 'app-list-all-users',
  templateUrl: './list-all-users.component.html',
  styleUrls: ['./list-all-users.component.scss']
})
export class ListAllUsersComponent implements OnInit {

  users?:User[];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  // ngOnInit(): void {
  //   this.userService.getAllUsers().subscribe(users => {
  //     this.users = users;
  //   });
  // }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
     });
  }

  deleteUser(user_id:any){
    console.log('inside delete user');
    console.log(user_id);
    this.userService.removeUser(user_id);
  }
}
