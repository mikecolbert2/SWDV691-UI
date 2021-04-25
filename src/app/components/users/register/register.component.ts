import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  users: User[] = [];
  newUser: User = new User();

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  onSaveClick() {
    console.log(this.newUser);
    this.usersService.insertUser(this.newUser).subscribe(
      (response) => {
        //Add User to Database
        var u: User = new User();
        u.first_name = response.first_name;
        u.last_name = response.last_name;
        u.email = response.email;
        u.password = response.password;
        u.password2 = response.password2;

        //this.users.push(u);  we're not adding this to the table

        console.log(u);

        this.router.navigate(['login']);

        // //Clear New Project Dialog - TextBoxes
        // this.newUser.first_name = '';
        // this.newUser.last_name = '';
        // this.newUser.email = '';
        // this.newUser.password = '';
        // this.newUser.password2 = '';
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
