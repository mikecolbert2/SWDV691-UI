export class User {
  user_id?: any; //any type is necessary for json to interact with db uuid field
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  password2?: string;
  role_name?: string;
  date_created?: Date;
  last_login?: Date;
}
