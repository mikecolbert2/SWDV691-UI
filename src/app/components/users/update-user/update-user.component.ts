import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../../../service/users.service';
import { User } from '../../../models/User';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  @Input() user?:User;

  //users?:User[];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }


updateUser(user_id:any){
  console.log('update user')
};

deleteUser(user_id:any){
  console.log('delete user')
};

}
