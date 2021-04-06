
//import { v4 as uuid } from 'uuid';

export class User {
    //user_id?:string = uuid();
    user_id?:any;
    first_name?:string;
    last_name?:string;
    email?:string;
    password?:string;
    role_name?:string;
    date_created?:Date;
    last_login?:Date;
}