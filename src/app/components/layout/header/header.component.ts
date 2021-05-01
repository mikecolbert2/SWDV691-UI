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
  current_user_role: string = '';

  ngOnInit(): void {
    this.current_user_email = JSON.parse(
      sessionStorage.getItem('user_email') || '{}'
    );
    this.current_user_role = JSON.parse(
      sessionStorage.getItem('user_role') || ''
    );
    console.log('current_user_email: ' + this.current_user_email);
    console.log('current_user_role: ' + this.current_user_role);
  }
}
