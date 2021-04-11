import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ListAllUsersComponent } from '../admin/list-all-users/list-all-users.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, UsersRoutingModule],
  declarations: [UpdateUserComponent, ListAllUsersComponent],
})
export class UsersModule {}
