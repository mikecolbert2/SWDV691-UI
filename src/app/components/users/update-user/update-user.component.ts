import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { first } from 'rxjs/operators';
import { UsersService } from '../../../service/users.service';
import { User } from '../../../models/User';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  user_id: string = '';
  user: any = [];

  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  password2?: string;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute // private router: Router
  ) {}

  ngOnInit(): void {
    this.getUser(this.route.snapshot.params['user_id']);
  }

  getUser(user_id: string): void {
    this.user = this.userService.getById(user_id).subscribe(
      (data) => {
        this.user = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateUser(u: any): void {
    const user = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      password2: this.password2,
    };
    console.log('inside onSubmit');
    console.log(user);

    //this.usersService.registerUser.emit(user);
    this.userService.updateUser(user);
  }
}
