import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { AllUsersComponent } from './all-users/all-users.component';

@NgModule({
  declarations: [UserManagerComponent, AllUsersComponent],
  imports: [CommonModule],
  exports: [UserManagerComponent, AllUsersComponent],
})
export class AdminModule {}
