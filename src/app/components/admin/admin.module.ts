import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserManagerComponent, AllUsersComponent, EditUserComponent],
  imports: [CommonModule, FormsModule],
  exports: [UserManagerComponent, AllUsersComponent],
})
export class AdminModule {}
