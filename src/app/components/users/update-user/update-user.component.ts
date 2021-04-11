import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
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

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.user_id = this.route.snapshot.params['user_id'];

    this.user = this.userService
      .getById(this.user_id)
      .pipe(first())
      .subscribe((users: any) => {
        this.user = users;
      });
  }

  updateUser(user_id: string) {
    console.log('update user');
  }
}
