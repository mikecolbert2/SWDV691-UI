import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private usersService: UsersService, public router: Router) {}

  ngOnInit(): void {}

  userLogout() {
    this.usersService.userSignOut();
    this.router.navigate(['']);
  }
}
