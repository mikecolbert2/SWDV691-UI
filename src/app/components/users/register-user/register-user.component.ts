import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { UsersService } from "../../../service/users.service";


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  @Output() registerUser: EventEmitter<any> = new EventEmitter();

  first_name?:string;
  last_name?:string;
  email?:string;
  password?:string;
  password2?:string;


  constructor(private usersService:UsersService) { }

  ngOnInit() {
  }

  onSubmit() {
    const user = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      password2: this.password2
    }
    // these work - they display in the console
    console.log('inside onSubmit');
    console.log(user)

    //this doesn't seem to be executing
    this.registerUser.emit(user);
  }



}
