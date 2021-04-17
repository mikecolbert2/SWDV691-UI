export class User {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password2: string;
  role_name: string;
  date_created: string;
  last_login: string;

  constructor() {
    this.user_id = '';
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.password = '';
    this.password2 = '';
    this.role_name = '';
    this.date_created = '';
    this.last_login = '';
  }
}
