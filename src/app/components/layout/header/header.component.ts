import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public loginService: LoginService) {}
  current_user_email: string = '';

  ngOnInit(): void {
    this.current_user_email = JSON.parse(
      sessionStorage.getItem('user_email') || '{}'
    );
  }
}
