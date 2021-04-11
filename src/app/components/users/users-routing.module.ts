import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAllUsersComponent } from '../admin/list-all-users/list-all-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: ListAllUsersComponent,
    children: [
      { path: '', component: ListAllUsersComponent },
      { path: 'user/update/:user_id', component: UpdateUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
